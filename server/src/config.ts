const config = {
	DENO_KV_PATH: Deno.env.get('DENO_KV_PATH') ?? '.deno_kv',
	BOT_TOKEN: Deno.env.get('BOT_TOKEN'),
	ONBOARDING_BOT_TOKEN: Deno.env.get('ONBOARDING_BOT_TOKEN'),
	ONBOARDING_WEBHOOK_URL: Deno.env.get('ONBOARDING_WEBHOOK_URL') ?? '',
	TELEGRAM_BOT_API_SECRET: Deno.env.get('TELEGRAM_BOT_API_SECRET') ?? '',
	DENO_ENV: Deno.env.get('DENO_ENV') ?? 'DEV',
	WEBHOOK_URL: Deno.env.get('WEBHOOK_URL') ?? '',
};

console.log('env vars');
Object.entries(config).forEach(([key, value]) => {
	if (value === undefined) {
		throw new Error(`Did not set env var ${key}`);
	}
	console.log(`${key}=${value}`);
});

export default config;
