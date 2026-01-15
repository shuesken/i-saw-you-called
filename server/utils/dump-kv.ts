import config from '../src/config.ts';
const { DENO_KV_PATH } = config;

const kv = await Deno.openKv(DENO_KV_PATH + '/kv');
const iter = kv.list({ prefix: [] });
for await (const entry of iter) {
	console.log(`${entry.key}: ${JSON.stringify(entry.value)}`);
}
