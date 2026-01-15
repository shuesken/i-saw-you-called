import { useApi } from './api';

import { handleBusy, handleCommand, handleMessage, handleEvent } from './handlers';

export interface Env {
	STATE: KVNamespace;
}

const GERMS_URL = 'https://isawyoucalled-phaser.pages.dev/boot?src=src/games/avoid%20the%20germs/boot.json';
const FLIPO_URL = 'https://isyc-flipo.pages.dev/';

const SIXTYSOMETHING_TOKEN = '...';

export default {
	async fetch(request: Request, , ctx: ExecutionContext): Promise<Response> {
		if (!(request.method == 'POST')) {
			console.error(`request.method should be "POST", was "${request.method}"`);
			return new Response();
		}
		const body = (await request.json()) as any;

		console.log(JSON.stringify(body));

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
		const { setStateProp, getStateProp, answerCallbackQuery, answerInlineQuery, sendMessage } = useApi(chatId, SIXTYSOMETHING_TOKEN);

		try {
			if (body.inline_query) {
				const res = await answerInlineQuery(body.inline_query.id);
				console.log('res', res);
				console.log(await res.text());
				return new Response();
			}
			if (body.callback_query) {
				await answerCallbackQuery(FLIPO_URL, body.callback_query.id);
				await setStateProp('isBusy', false);
				return new Response();
			}

			const sprachiMsg = 'Sprachi: https://isyc-sprachis.pages.dev/test.ogg';
			if (text == '/sprachi') {
				await sendMessage('demo', [sprachiMsg]);
				return new Response();
			}

			if (text == sprachiMsg) {
				return new Response();
			}

			ctx.waitUntil(handleEvent(chatId, messageId, text, SIXTYSOMETHING_TOKEN));
			return new Response();
		} catch (e: any) {
			console.error('Execution error');
			console.error(e);
			return new Response();
		}
	},
};
