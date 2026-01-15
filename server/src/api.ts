import config from './config.ts';
const { BOT_TOKEN, DENO_KV_PATH } = config;

const kv = await Deno.openKv(DENO_KV_PATH + '/kv');

export interface Variables {
	howlong: string;
	future: string;
	give_up: string;
	game1: string;
	dance: string;
	gettingready: string;
	dancepartner: string;
	pw: string;
	clarence_when: string;
	lullaby: string;
	stable: string;
	okok: string;
	ghosts: string;
	princess: string;
	kindaparent: string;
}

export const GAMES = {
	isyc_bathtub: 'https://isyc-bathtub.pages.dev',
	isyc_carride: 'https://isyc-carride.pages.dev',
	isyc_cleanup: 'https://isyc-cleanup.pages.dev',
	isyc_thrust: 'https://isyc-thrust.pages.dev',
	isyc_diary: 'https://isyc-diary.pages.dev',
	isyc_platformer: 'https://isyc-platformer.pages.dev',
	isyc_flipo: 'https://isyc-flipo.pages.dev',
	isyc_memory: 'https://isyc-memory.pages.dev',
	isyc_snake: 'https://isyc-snake.pages.dev',
	isyc_epilogue: 'https://isyc-epilogue.pages.dev',
};

export async function wait(min: number, max: number = -1) {
	if (max == -1) max = min;
	const timeout = Math.floor(Math.random() * (max - min) + min);
	return new Promise((resolve, reject) => {
		setTimeout(resolve, timeout);
	});
}

export function useApi(chatId: string, token = BOT_TOKEN) {
	const api = `https://api.telegram.org/bot${token}`;
	async function makeRequest(functionName: string, body: any) {
		const url = `${api}/${functionName}`;
		const headers = { 'Content-Type': 'application/json' };
		const opts = {
			method: 'POST',
			headers,
			body: JSON.stringify(body),
		};

		return await fetch(url, opts);
	}

	async function setTyping() {
		const body = {
			chat_id: chatId,
			action: 'typing',
		};

		return await makeRequest('sendChatAction', body);
	}

	async function sendMessage(text: string, possibleReplies: string[]) {
		let body: any = { chat_id: chatId, text: text };
		await wait(300, 1200);
		await setTyping();
		const timeout = Math.min(text.length * 40 + 200, 4800);
		await wait(timeout - 200, timeout + 200);

		const keyboard = possibleReplies.map((reply) => [reply]);
		if (keyboard.length > 0) {
			body = {
				reply_markup: {
					keyboard,
					is_persistent: true,
					input_field_placeholder: 'my placeholder',
				},
				...body,
			};
		}

		const response = await makeRequest('sendMessage', body);
		const json = await response.json();
		return json.result.message_id;
	}

	async function sendMessageAndRemoveKeyboard(text: string) {
		let body: any = { chat_id: chatId, text: text, reply_markup: { remove_keyboard: true } };

		const response = await makeRequest('sendMessage', body);
		const json = await response.json();
		return json.result.message_id;
	}

	async function sendMessageWithInlineKeyboardQuery(text: string, query: string) {
		let body: any = {
			chat_id: chatId,
			text: 'This could be whatever',
			reply_markup: {
				inline_keyboard: [[{ text: text, switch_inline_query_current_chat: query }]],
			},
		};

		const response = await makeRequest('sendMessage', body);
		const json = await response.json();
		return json.result.message_id;
	}

	async function deleteMessage(messageId: string) {
		const body = { chat_id: chatId, message_id: messageId };
		return await makeRequest('deleteMessage', body);
	}

	async function sendImage() {
		const body = { chat_id: chatId, photo: 'https://isyc-epilogue.pages.dev/spacedance%20flyer.png' };
		return await makeRequest('sendPhoto', body);
	}

	async function sendVideo(name: string) {
		const body = { chat_id: chatId, video: `https://isyc-epilogue.pages.dev/${name}` };
		return await makeRequest('sendVideo', body);
	}

	async function getVariables() {
		const vars = (await kv.get(['STORY-STATE', chatId, 'variables'])).value;
		if (!vars) {
			throw new Error(`got invalid variables "${JSON.stringify(vars)}" for user "${chatId}"`);
		}
		return vars as Variables;
	}

	async function setVariables(variables: Variables) {
		return await kv.set(['STORY-STATE', chatId, 'variables'], variables);
	}

	async function resetVariables() {
		return await setVariables({
			howlong: 'recent',
			future: 'nopromises',
			give_up: 'break',
			game1: 'Staircase',
			dance: 'notlikethat',
			gettingready: 'didntbringuptalking',
			dancepartner: 'noone',
			pw: 'winter',
			clarence_when: 'little',
			lullaby: 'moon',
			stable: 'well',
			okok: 'prettygood',
			ghosts: 'true',
			princess: 'true',
			kindaparent: 'games',
		});
	}

	async function resetState() {
		await setCurrentNode('Start');
		await setHistory([]);
		await setBusy(null);
		await setMissedCallMessageId(null);
		await resetVariables();
	}

	async function getCurrentNode() {
		const currentNode = (await kv.get(['STORY-STATE', chatId, 'current-node'])).value;
		if (typeof currentNode !== 'string') {
			throw new Error(`got invalid currentNode "${currentNode}" for user "${chatId}"`);
		}
		return currentNode;
	}

	async function setCurrentNode(currentNode: string) {
		await kv.set(['STORY-STATE', chatId, 'current-node'], currentNode);
	}

	async function getBusy() {
		const busy = (await kv.get(['UTILS', chatId, 'busy'])).value;
		console.log(`got busy ${busy} for chatId ${chatId}`);
		if (busy === null) {
			return null;
		}
		if (typeof busy !== 'string' || !Date.parse(busy)) {
			throw new Error(`got invalid busy "${busy}" for user "${chatId}"`);
		}
		return busy;
	}

	async function getMissedCallMessageId() {
		const missedCallMessageId = (await kv.get(['UTILS', chatId, 'missed-call-message-id'])).value;
		if (!(typeof missedCallMessageId === 'string')) {
			throw new Error(`got invalid missedCallMessageId "${missedCallMessageId}" for user "${chatId}"`);
		}
		return missedCallMessageId;
	}

	async function setMissedCallMessageId(missedCallMessageId: string | null) {
		if (missedCallMessageId === null) {
			await kv.delete(['UTILS', chatId, 'missed-call-message-id']);
			return;
		}
		await kv.set(['UTILS', chatId, 'missed-call-message-id'], `${missedCallMessageId}`);
	}

	async function setBusy(busy: string | null) {
		if (busy === null) {
			await kv.delete(['UTILS', chatId, 'busy']);
			return;
		}
		if (!Date.parse(busy)) {
			throw new Error(`trying to set invalid busy "${busy}" for user "${chatId}"`);
		}
		await kv.set(['UTILS', chatId, 'busy'], busy);
	}

	async function setHistory(history: any[]) {
		await kv.set(['STORY-STATE', chatId, 'history'], history);
	}

	async function getHistory() {
		const history = (await kv.get(['STORY-STATE', chatId, 'history'])).value;
		if (!Array.isArray(history)) {
			throw new Error(`got invalid history "${JSON.stringify(history)}" for user "${chatId}"`);
		}
		return history;
	}

	async function hasStoryState() {
		const stateEntries = (
			await kv.getMany([
				['STORY-STATE', chatId, 'current-node'],
				['STORY-STATE', chatId, 'history'],
				['STORY-STATE', chatId, 'variables'],
			])
		).filter((e) => e.value !== null);
		if (stateEntries.length === 0) {
			return false;
		} else if (stateEntries.length === 3) {
			return true;
		} else {
			throw new Error(`got invalid number of stateEntries ${stateEntries.length} in ${JSON.stringify(stateEntries)}`);
		}
	}

	async function sendGame(shortName: string) {
		console.log('sending game', shortName);
		const body = {
			chat_id: chatId,
			game_short_name: shortName,
		};

		return await makeRequest('sendGame', body);
	}

	async function answerCallbackQuery(gameShortName: string, callbackQueryId: string) {
		console.log('answering callbackquery', gameShortName);

		if (!(gameShortName in GAMES)) {
			throw new Error(`got invalid gameShortName ${gameShortName}`);
		}

		const body = {
			callback_query_id: callbackQueryId,
			url: GAMES[gameShortName],
		};

		console.log(body);

		return await makeRequest('answerCallbackQuery', body);
	}

	async function answerInlineQuery(inlineQueryId: string) {
		const body = {
			inline_query_id: inlineQueryId,
			cache_time: 10,
			results: [
				{
					type: 'voice',
					id: '1',
					voice_url: 'https://envs.sh/FfO.ogg',
					title: 'any voice note title we want',
					reply_markup: {
						inline_keyboard: [[{ text: 'Next after voice', switch_inline_query_current_chat: '' }]],
					},
				},
				{
					type: 'article',
					id: 'xV7eI9DuFKiLjiix6QcRkgQ',
					title: 'any title we want for a text message',
					input_message_content: { message_text: 'an arbitrarily long message sent on the users behalf' },
					reply_markup: {
						inline_keyboard: [[{ text: 'Next after text', switch_inline_query_current_chat: '' }]],
					},
				},
			],
		};

		console.log('sending inline response', body);

		return await makeRequest('answerInlineQuery', body);
	}

	async function jumpToNode(node: string) {
		await setCurrentNode(node);
		await setHistory([]);
	}

	return {
		sendMessage,
		sendMessageAndRemoveKeyboard,
		sendMessageWithInlineKeyboardQuery,
		deleteMessage,
		resetState,
		sendGame,
		answerCallbackQuery,
		answerInlineQuery,
		resetVariables,
		jumpToNode,
		setTyping,
		sendImage,
		sendVideo,
		setBusy,
		getBusy,
		setCurrentNode,
		getCurrentNode,
		hasStoryState,
		getMissedCallMessageId,
		setMissedCallMessageId,
		getHistory,
		setHistory,
		setVariables,
		getVariables,
	};
}

export interface ScheduleObj {
	futureExecutionTime: number;
	chatId: string;
	messageId: string;
	text: string;
	sentGame: boolean | string;
}

export async function pauseHandling(chatId: string, messageId: string, text: string, until: number) {
	const futureExecutionTime = Date.now() + until * 1000;
	const scheduleObj: ScheduleObj = {
		futureExecutionTime,
		chatId,
		messageId,
		text,
		sentGame: '',
	};
	console.log('pause to insert', scheduleObj);
	await kv.set(['WAITING', chatId], scheduleObj);
}

export async function* getToResume() {
	const waitingChatEntries = kv.list<ScheduleObj>({ prefix: ['WAITING'] });
	const currentTime = Date.now();
	for await (const waitingChatEntry of waitingChatEntries) {
		if (waitingChatEntry.value.futureExecutionTime < currentTime) {
			await kv.delete(waitingChatEntry.key);
			yield waitingChatEntry.value;
		}
	}
}

export async function clearWaiting(chatId: string) {
	const key = ['WAITING', chatId];
	const scheduleObj = (await kv.get(key)).value;
	if (scheduleObj) {
		await kv.delete(key);
		return true;
	}
	return false;
}

export async function isWaiting(chatId: string) {
	const key = ['WAITING', chatId];
	const scheduleObj = (await kv.get(key)).value;
	if (scheduleObj) {
		return true;
	}
	return false;
}
