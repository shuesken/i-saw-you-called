import { useApi } from './api.ts';

import { handleMessage, handleEvent } from './handlers.ts';

import { handleOnboarding } from './onboarding.ts';

import { getToResume, wait } from './api.ts';
import { poke } from './poke.ts';
import config from './config.ts';
const { BOT_TOKEN, TELEGRAM_BOT_API_SECRET } = config;

async function handleRequest(request: Request): Promise<Response> {
	console.log('handling request', request.url);
	if (!(request.method == 'POST')) {
		console.error(`request.method should be "POST", was "${request.method}"`);
		return new Response(null, { status: 400 });
	}

	if (!(request.headers.get('X-Telegram-Bot-Api-Secret-Token') === TELEGRAM_BOT_API_SECRET)) {
		console.error(`request api secret did not valdiate, was "${request.headers.get('X-Telegram-Bot-Api-Secret-Token')}"`);
		return new Response(null, { status: 400 });
	}

	try {
		const pathname = new URL(request.url).pathname;
		if (pathname === '/sixtysomething/') {
			return await handleSixtysomething(request);
		} else if (pathname === '/onboarding/') {
			return await handleOnboarding(request);
		} else {
			console.error(`got invalid pathname "${pathname}"`);
			return new Response(null, { status: 400 });
		}
	} catch (e) {
		console.error(e);
		return new Response(null, { status: 500 });
	}
}

async function handleSixtysomething(request: Request) {
	let body;
	try {
		body = (await request.json()) as any;
	} catch (e) {
		console.error(e);
		return new Response(null, { status: 400 });
	}

	console.log('got body', body);

	let message;
	let chatId;
	let messageId;
	let text;
	if (body.message) {
		message = body.message;
		chatId = message.chat.id;
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
	const { answerCallbackQuery, answerInlineQuery, setBusy } = useApi(chatId);

	if (body.inline_query) {
		const res = await answerInlineQuery(body.inline_query.id);
		console.log('res', res);
		console.log(await res.text());
		return new Response();
	}
	if (body.callback_query) {
		console.log(JSON.stringify(body.callback_query));
		await answerCallbackQuery(body.callback_query.game_short_name, body.callback_query.id);
		await setBusy(null);
		return new Response();
	}

	await handleEvent(chatId, messageId, text);
	return new Response();
}

Deno.cron('poke', '50 * * * *', poke);
Deno.cron('scheduled', '* * * * *', checkWaiting);

async function checkWaiting() {
	console.log('GOT CRON');

	const iter = getToResume();

	for await (const scheduleObj of iter) {
		scheduleObj.sentGame = await handleMessage(scheduleObj.chatId, '', 'doesnotexist', BOT_TOKEN);
		console.log(scheduleObj.chatId, scheduleObj.sentGame);
		if (!(scheduleObj.sentGame && scheduleObj.sentGame === 'sentgame')) {
			// try again just to be sure
			wait(1);
			await handleMessage(scheduleObj.chatId, '', 'doesnotexist', BOT_TOKEN);
		}
	}
}

Deno.serve(handleRequest);
