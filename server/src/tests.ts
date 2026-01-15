import { assertEquals } from 'jsr:@std/assert@1';

const WEBHOOK_URL = 'http://0.0.0.0:8000';

Deno.test('invalid body', async () => {
	const resp = await fetch(WEBHOOK_URL, {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},

		//make sure to serialize your JSON body
		body: 'invalid',
	});
	await resp.text();
	assertEquals(resp.status, 400);
});

Deno.test('invalid request', async () => {
	const resp = await fetch(WEBHOOK_URL);
	await resp.text();
	assertEquals(resp.status, 400);
});

Deno.test('valid request', async () => {
	const body = {
		update_id: 67898060,
		message: {
			message_id: 57,
			from: {
				id: ...,
				is_bot: false,
				first_name: 'Simon',
				username: '...',
				language_code: 'en',
			},
			chat: {
				id: ...,
				first_name: 'Simon',
				username: '...',
				type: 'private',
			},
			date: 1723409231,
			text: 'asdfdasf',
		},
	};
	const resp = await fetch(WEBHOOK_URL, {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},

		//make sure to serialize your JSON body
		body: JSON.stringify(body),
	});
	await resp.text();
	assertEquals(resp.status, 200);
});
