import { useApi, wait, ScheduleObj } from './api.ts';

import config from './config.ts';

const { ONBOARDING_BOT_TOKEN, DENO_KV_PATH } = config;

const kv = await Deno.openKv(DENO_KV_PATH + '/kv');

import { handleCommand, handleMessage, handleEvent } from './handlers.ts';

import { contentnotes, contentnotesDE, helpMessages, ticketMessages } from './messages.ts';

const testerChatIds = [690291200];

export async function handleOnboarding(request: Request): Promise<Response> {
	const body = (await request.json()) as any;

	console.log(JSON.stringify(body));

	let message;
	let chatId;
	let messageId;
	let text;
	let date;
	if (body.message) {
		message = body.message;
		chatId = message.chat.id;
		date = message.date;
		messageId = message.message_id;
		text = message.text;
	} else if (body.callback_query) {
		message = body.callback_query.message;
		chatId = message.chat.id;
		messageId = message.message_id;
		text = message.text;
	} else if (body.inline_query) {
		chatId = body.inline_query.from.id;
	}
	const { sendMessage, sendMessageAndRemoveKeyboard, deleteMessage, sendVideo } = useApi(chatId, ONBOARDING_BOT_TOKEN);

	let chats = (await kv.get(['CHATS', chatId])).value;
	if (!chats || !chats?.messages || !Array.isArray(chats.messages)) chats = { messages: [] };
	chats.messages.push({ messageId: messageId, text: text, date: date });
	await kv.set(['CHATS', chatId], chats);

	const startDate = 1713193200000; // April 15th, 17:00, GMT+02
	const now = Date.now();

	const started = (await kv.get(['CHATS', chatId, 'started'])).value;
	const isBusy = (await kv.get(['CHATS', chatId, 'busy'])).value;

	console.log('text', text);
	if (isBusy && parseInt(isBusy) && parseInt(isBusy) + 60 * 1000 > Date.now()) {
		console.log('is busy, deleting message');
		await deleteMessage(messageId);
		return new Response();
	}

	await kv.set(['CHATS', chatId, 'busy'], Date.now().toString());

	if (text.startsWith('/start')) {
		await kv.set(['CHATS', chatId, 'started'], Date.now().toString());
		for (const message of ticketMessages) {
			await sendMessage(message, []);
		}
		await wait(1000);
		await sendVideo('buttons.mp4');
		await sendMessage('Try it now!', ['next!', 'can you repeat that?']);
	} else if (testerChatIds.includes(chatId) && text == '/reset') {
		console.log('resetting');
		await kv.set(['CHATS', chatId, 'busy'], '');
		await kv.set(['CHATS', chatId, 'started'], '');
		await kv.set(['CHATS', chatId, 'finished'], '');
		return new Response();
	} else if (!started) {
		await deleteMessage(messageId);
	} else if (started) {
		if (text == 'can you repeat that?') {
			await sendMessage('Try it now!', ['next!']);
		} else if (text == 'next!') {
			await sendMessage('Great', []);
			await sendMessage(
				'There are some built-in pauses in the game (which will take a minimum of 2-3 days to play through), ranging from a few seconds to several hours. If you aren’t getting an answer from Sixty-Something, you are probably in one of these pauses. Take a break from the game and return once you have received a new message 😊',
				['ok!']
			);
		} else if (text == 'ok!') {
			await sendMessage(
				'If something seems to not be working, try closing the chat and re-opening it. If that also doesn’t work, please contact us.',
				['will do']
			);
		} else if (text == 'will do') {
			await sendMessage(
				'There are no built-in breaks longer than 24 hours, so if you go longer without any new messages after your last response, you’ve most likely hit an unplanned snag.',
				['gotcha, I’ll send an email if that’s the case']
			);
		} else if (text == 'gotcha, I’ll send an email if that’s the case') {
			await sendMessage(
				'There are some interactive interludes included in “i saw you called?”. It is important that you play them with the sound on. So if you begin an interlude game and don’t hear anything, try a) turning up your phone volume, b) tapping on the screen again, or c) turning your phone off of silent mode. If none of that works, don’t hesitate to reach out to us.',
				['sounds good']
			);
		} else if (text == 'sounds good') {
			await sendMessage(
				'If you want to review the content notes now or at any point during the piece, you can send me the following message: /contentnotes. If you want to read them in German, send me the following: /contentnotesDE',
				['/contentnotes', '/contentnotesDE', "I'm all set"]
			);
		} else if (text == '/contentnotes') {
			await sendMessage(contentnotes, []);
			await wait(3000);
			await sendMessage('all set?', ['yup!']);
		} else if (text == '/contentnotesDE') {
			await sendMessage(contentnotesDE, []);
			await wait(3000);
			await sendMessage('all set?', ['yup!']);
		} else if (text == "I'm all set" || text == 'yup!') {
			await kv.set(['CHATS', chatId, 'finished'], Date.now().toString());
			await sendMessage(
				'Wonderful! When you’re ready to begin, click on this link to begin talking with Sixty-Something: https://t.me/feelings_sixtyfive_bot/start. Once you’re there, either click the “start” button or enter “/start”.',
				[]
			);
		} else if (text == '/help') {
			const state = (await kv.get(['STATE', chatId])).value;
			const currentNode = state.currentNode;
			const where = allAvailableNodes.findIndex((n) => n == currentNode);
			const scheduled = (await kv.get(['SCHEDULED', 'scheduled'])).value;
			console.log('old scheduled', scheduled);
			const pauses = scheduled.pauses as ScheduleObj[];

			const pause = pauses.find((o) => o.chatId == chatId);

			let location = '';
			if (where == -1) {
				const text = `You have reached an impossible state. Please contact the team for help!`;
			} else if (where < 20) {
				location = 'first';
			} else if (where < 40) {
				location = 'second';
			} else {
				location = 'final';
			}

			if (pause) {
				const timeLeftMinutes = (pause.futureExecutionTime - Date.now()) / 1000 / 60;

				let timeLeftText = '';
				if (timeLeftMinutes < 90) {
					timeLeftText = `${Math.round(timeLeftMinutes)} minutes`;
				} else {
					timeLeftText = `${Math.round(timeLeftMinutes / 60)} hours`;
				}

				const text = `Hey there! You’re in the middle of a built-in pause. You should be getting a message from Sixty-Something in ${timeLeftText}. 
You’re in the ${location} third of the piece. ✨
					`;
				await sendMessageAndRemoveKeyboard(text);

				const skipHelp = `By the way, here’s another option for you: 
If you want to skip the remainder of the built-in pause and jump straight to the next message, you can type “/skip” into your chat with Sixty-Something. `;

				await sendMessageAndRemoveKeyboard(skipHelp);
			} else {
				const text = `Hey there! If you’re not getting a response from Sixty-Something right now, you might have hit a little snag. Here are some things that might help:
1) Try closing and re-opening Telegram.
2) Try repeating the last message you sent (do this a few times if there’s no reaction).
3) If neither of these work, send an email to FEELINGS at dreyer.mehling@gmail.com, ideally with a screenshot or a quote from your chat with Sixty-Something.
I hope that helps!
Just so you know, you’re in the ${location} third of the piece. ✨
					`;
				await sendMessageAndRemoveKeyboard(text);
				const skipHelp = `By the way, the next time you are in a built-in pause and you find yourself wishing you could speed things along, you can jump straight to the next message by typing “/skip” into your chat with Sixty-Something. `;
				await sendMessageAndRemoveKeyboard(skipHelp);
			}
		} else {
			await deleteMessage(messageId);
		}
	}
	await kv.set(['CHATS', chatId, 'busy'], '');
	return new Response();
}

const allAvailableNodes = [
	'Start',
	'start2',
	'start3',
	'start4',
	'start5',
	'start6',
	'spacedance',
	'margret',
	'margret2',
	'margret3',
	'margret4',
	'washedaway',
	'princess',
	'princess2',
	'princess3',
	'princess5',
	'ghosts',
	'moonsong',
	'riversong',
	'nightsong',
	'ghosts2',
	'storytime',
	'storytime1',
	'storytime2',
	'unwell',
	'storytime3',
	'storytime4',
	'fight',
	'fight2',
	'fight3',
	'fight4',
	'fight5',
	'fight6',
	'arcade',
	'arcade2',
	'arcade3',
	'arcade4',
	'arcade5',
	'arcade6',
	'arcade7',
	'thirdperson',
	'why',
	'who',
	'who2',
	'aftermath',
	'endMargret',
	'endGhosts',
	'endPrincess',
	'endPrincess2',
	'games',
	'absent',
	'today',
	'recent',
	'longterm',
	'aftermath2',
	'aftermath3',
	'aftermath4',
	'exorcism',
	'reabsorption',
	'farewell',
	'keep',
	'time_apart',
	'no_contact',
	'no_contact2',
	'epilogue',
	'credits',
];
