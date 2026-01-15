let lastUptime = Date.now();

Deno.serve((req) => {
	const url = new URL(req.url);
	if (url.pathname === '/onboarding') {
		console.log('got health ping');
		lastUptime = Date.now();
	}
	return new Response();
});

Deno.cron('status check', { minute: { every: 5 } }, () => {
	const now = Date.now();
	if (now - lastUptime > 3 * 60 * 1000) {
		console.error('bot seems down');
	} else {
		console.log('all good');
	}
});
