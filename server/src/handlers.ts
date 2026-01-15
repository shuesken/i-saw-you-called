import { pauseHandling, useApi, clearWaiting, isWaiting } from './api.ts';
import { YarnBound } from '../deps.ts';
import { dialogue } from './dialogue.ts';
import { GAMES } from './api.ts';
import config from './config.ts';
const BOT_TOKEN = config.BOT_TOKEN as string;

export async function wait(inSeconds: number) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, inSeconds * 1000);
	});
}

function convertVoicenotes(options: string[]) {
	const re = /AAA insert voice message "Memo 24-(.+)" BBB/;
	return options.map((o: string) => {
		const match = o.match(re);
		if (!match) return o.trim();
		const number = match[1];
		return `memos.run/24-${number}`;
	});
}

export async function handleEvent(chatId: string, messageId: string, text: string, token: string = BOT_TOKEN) {
	const { deleteMessage, sendMessage, hasStoryState, getBusy, setBusy } = useApi(chatId, token);
	console.log(`HANDLING EVENT: "${text}"`);

	const handledCommand = await handleCommand(chatId, messageId, text, token);
	if (handledCommand) {
		console.log(`handled command ${text}`);
		return;
	}

	if (!(await hasStoryState())) {
		console.warn('got message from somebody without a state');
		await sendMessage("I haven't seen you before. Write /start to get started!", ['/start']);
		return;
	}

	const busy = await getBusy();
	if (busy && Date.parse(busy) + 30 * 1000 > Date.now()) {
		console.warn('was busy');
		await deleteMessage(messageId);
		return;
	}

	if (await isWaiting(chatId)) {
		console.warn('was waiting');
		await deleteMessage(messageId);
		return;
	}

	console.log('setting bus');
	await setBusy(new Date().toISOString());

	const handledMessage = await handleMessage(chatId, messageId, text, token);
	if (handledMessage) {
		console.log(`handled message ${text}`);
	}
	await setBusy(null);
}

export async function handleCommand(chatId: string, messageId: any, text: string, token: string = BOT_TOKEN) {
	if (!text || !text.startsWith('/')) return false;
	const { resetState, sendVideo, deleteMessage, sendGame, jumpToNode, setBusy } = useApi(chatId, token);
	if (text == '/start') {
		await resetState();
		await setBusy(null);
		await clearWaiting(chatId);
		return false;
	} else if (text == '/test') {
		await sendVideo('abspann_small.mp4');
	} else if (text == '/reset') {
		await resetState();
		return false;
	} else if (text == '/help') {
		// 		const runner = new YarnBound({ dialogue });
		// 		const availableNodes = Object.keys(runner.runner.yarnNodes).join('\n- ');
		// 		const availableGames = Object.keys(GAMES)
		// 			.map((g) => g.split('_')[1])
		// 			.join('\n - ');
		// 		console.log(availableNodes);
		// 		const currentNode = await getStateProp('currentNode');
		// 		const message = `Available commands:
		// - /help
		// - /jump <node>
		// - /skip
		// - /start
		// - /game <game>
		// Available games:
		// ${availableGames}
		// You are at "${currentNode}". Available nodes:
		// ${availableNodes}`;
		// 		await sendMessage(message, []);
	} else if (text.startsWith('/jump')) {
		const node = text.split(' ')[1];
		const runner = new YarnBound({ dialogue });
		console.log(runner);
		const availableNodes = Object.keys(runner.runner.yarnNodes);
		if (availableNodes.includes(node)) {
			console.log(`jumping to "${node}"`);
			await jumpToNode(node);
			await setBusy(null);
			await clearWaiting(chatId);
			return false;
		}
	} else if (text.startsWith('/game')) {
		const game = `isyc_${text.split(' ')[1]}`;
		const games = Object.keys(GAMES);
		if (games.includes(game)) {
			await sendGame(game);
		} else {
			await deleteMessage(messageId);
		}
	} else if (text == '/skip') {
		console.log('skipping…');

		if (await isWaiting(chatId)) {
			await clearWaiting(chatId);
			console.log(`was skip successful: ${res}`);
			await handleMessage(chatId, '', 'doesnotexist', BOT_TOKEN);
			await deleteMessage(messageId);
			return false;
		}
		await deleteMessage(messageId);
	} else if (text == '/poke') {
		await handleMessage(chatId, '', 'doesnotexist', BOT_TOKEN);
	} else {
		await deleteMessage(messageId);
	}
	return true;
}

export async function handleMessage(chatId: string, messageId: string, text: string, token: string = BOT_TOKEN) {
	console.log('starting handleMessage', text);
	const {
		deleteMessage,
		sendMessage,
		sendGame,
		sendImage,
		sendVideo,
		getMissedCallMessageId,
		setMissedCallMessageId,
		getCurrentNode,
		setCurrentNode,
		setHistory,
		getHistory,
		setVariables,
		getVariables,
	} = useApi(chatId, token);

	if (text == 'i saw you called?') {
		const missedCallMessageId = await getMissedCallMessageId();
		await deleteMessage(missedCallMessageId);
	}

	async function saveState() {
		const newCurrentNode = runner.currentResult.metadata.title;
		await setCurrentNode(newCurrentNode);
		const newHistory = runner.history
			.filter((entry) => entry.metadata.title == newCurrentNode)
			.map((entry) => (typeof entry.selected == 'number' ? { selected: entry.selected } : {}));
		if (currentNode == 'Start' && newCurrentNode == 'Start') newHistory.shift(); // history gets empty options object for first line
		await setHistory(newHistory);
		await setVariables(variables);
	}

	const variables = await getVariables();
	const set = (key, value) => (variables[key] = value);
	const get = (key) => variables[key];

	const variableStorage = {
		get,
		set,
	};

	// GET DIALOGUE
	const options = {
		dialogue,
		variableStorage,
		// combineTextAndOptionsResults: true,
	};

	// SET UP YARN INSTANCE
	const runner = new YarnBound(options);

	console.log(`Received "${text}"`);

	// GET CURRENT NODE AND HISTORY FOR PLAYER
	let currentNode = await getCurrentNode();
	let history = await getHistory();

	console.log(`Current Node: "${currentNode}"`);
	console.log(`History: ${JSON.stringify(history)}`);

	// JUMP TO NODE AND RUN THROUGH HISTORY
	runner.jump(currentNode);

	for (const entry of history) {
		if (!((runner.currentResult as any) instanceof YarnBound.OptionsResult)) {
			runner.advance();
		} else if ((runner.currentResult as any) instanceof YarnBound.OptionsResult) {
			runner.advance(entry.selected);
		}
	}

	let sentGame = false;

	if (runner.currentResult instanceof YarnBound.OptionsResult) {
		// APPLY INCOMING MESSAGE TO OPTIONS
		console.log('Reached OptionsResults', JSON.stringify(runner.currentResult.options));
		const options = convertVoicenotes(runner.currentResult.options.map((o) => o.text));
		console.log('converted', options);
		const selectedOptionIndex = options.findIndex((o) => o == text);

		if (selectedOptionIndex == -1) {
			if (true) {
				console.log('HANDLING ALL CASES');
				const randomOptionIndex = Math.floor(Math.random() * options.length);
				runner.advance(randomOptionIndex);
				while (!(runner.currentResult instanceof YarnBound.OptionsResult)) {
					runner.advance();
				}
				const futureOptions = convertVoicenotes(runner.currentResult.options.map((o) => o.text));
				const futureOptionsIndex = futureOptions.findIndex((o) => o == text);
				if (futureOptionsIndex == -1) {
					console.log('found no future option');
					if (messageId) await deleteMessage(messageId);
					return false;
				}
				console.log('got a future option, yay');
				runner.advance(futureOptionsIndex);
			} else {
				console.error('could not find option', selectedOptionIndex);
				console.error(options);
				console.error(text);
				if (messageId) await deleteMessage(messageId);
				return true;
			}
		} else {
			console.log(`Choosing option ${selectedOptionIndex}`);
			runner.advance(selectedOptionIndex);
		}
	}

	// ADVANCE WITH MESSAGES UNTIL OPTIONSRESULT AGAIN
	let advancedFromWaiting = false;
	let sentSomething = false;

	while (!(runner.currentResult instanceof YarnBound.OptionsResult)) {
		if (runner.currentResult instanceof YarnBound.TextResult) {
			const textToSend = runner.currentResult.text;
			runner.advance();
			if (runner.currentResult instanceof YarnBound.OptionsResult) {
				console.log(`sending options text "${textToSend}"`);
				const messageId = await sendMessage(textToSend, convertVoicenotes(runner.currentResult.options.map((o) => o.text)));
				if (textToSend == 'Missed call from Sixty-Something') {
					await setMissedCallMessageId(messageId);
				}
			} else {
				await sendMessage(textToSend, []);
				sentSomething = true;
			}
		} else {
			if (runner.currentResult.command) {
				console.log('command is', runner.currentResult.command);
				const commandArray = runner.currentResult.command.split(' ');
				switch (commandArray[0]) {
					case 'pause':
						if (commandArray.length != 3 || !parseInt(commandArray[1]) || !['seconds', 'minutes', 'hours'].includes(commandArray[2])) {
							console.error(`got bad pause command: ${JSON.stringify(commandArray)}`);
							break;
						}
						runner.advance();
						advancedFromWaiting = true;
						if (text == 'doesnotexist' && !sentSomething) {
							console.log('avoiding break');
							break;
						}
						switch (commandArray[2]) {
							case 'seconds':
								await wait(commandArray[1]);
								break;
							case 'minutes':
								await saveState();
								await pauseHandling(chatId, messageId, text, commandArray[1] * 60);
								return 'sentgame';
							case 'hours':
								await saveState();
								await pauseHandling(chatId, messageId, text, commandArray[1] * 60 * 60);
								return 'sentgame';
						}
						break;
					case 'send_game':
						if (commandArray.length != 2) {
							console.error(`got bad send_game command: ${JSON.stringify(commandArray)}`);
							break;
						}
						console.log('got send_game', commandArray);
						await wait(10);
						await sendGame(commandArray[1]);
						sentSomething = true;
						sentGame = true;
						break;
					case 'send_credits':
						await sendVideo('abspann_small.mp4');
						break;
					case 'typing':
						if (commandArray.length != 2) {
							console.error(`got bad send_game command: ${JSON.stringify(commandArray)}`);
							break;
						}
						// do nothing
						break;
					case 'send_image':
						await sendImage();
						break;
					default:
						console.error(`got unknown command "${commandArray[0]}" as part of "${runner.currentResult.command}"`);
				}
				sentSomething = true;
			}

			if (!advancedFromWaiting) {
				runner.advance();
				advancedFromWaiting = false;
			}
		}
	}

	// SAVE CURRENT NODE AND HISTORY
	await saveState();
	if (sentSomething) return 'sentgame';
	else return true;
}
