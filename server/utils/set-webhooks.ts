import config from '../src/config.ts';
const { BOT_TOKEN, ONBOARDING_BOT_TOKEN, ONBOARDING_WEBHOOK_URL, WEBHOOK_URL, TELEGRAM_BOT_API_SECRET } = config;

if (!BOT_TOKEN || !WEBHOOK_URL || !TELEGRAM_BOT_API_SECRET || !ONBOARDING_BOT_TOKEN || !ONBOARDING_WEBHOOK_URL) {
	throw new Error('not all required env vars defined');
}

async function makeRequest(functionName: string, body: any, botToken: string) {
	const url = `https://api.telegram.org/bot${botToken}/${functionName}`;
	const headers = { 'Content-Type': 'application/json' };
	const opts = {
		method: 'POST',
		headers,
		body: JSON.stringify(body),
	};

	return fetch(url, opts);
}

async function setWebhook(url: string, secretToken: string, botToken: string) {
	const body = {
		url,
		secret_token: secretToken,
		drop_pending_updates: true,
	};
	return await makeRequest('setWebhook', body, botToken);
}

await setWebhook(WEBHOOK_URL, TELEGRAM_BOT_API_SECRET, BOT_TOKEN);
await setWebhook(ONBOARDING_WEBHOOK_URL, TELEGRAM_BOT_API_SECRET, ONBOARDING_BOT_TOKEN);
console.log('Successfully set webhooks.');
