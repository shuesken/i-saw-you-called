import config from '../src/config.ts';
const { DENO_KV_PATH } = config;

console.log('Resetting KV…');
const kv = await Deno.openKv(DENO_KV_PATH + '/kv');
const iter = kv.list({ prefix: [] });
for await (const entry of iter) {
	await kv.delete(entry.key);
}
console.log('Done.');
