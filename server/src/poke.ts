export const availableNodes = [
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

import { type ScheduleObj } from './api.ts';
import { useApi, isWaiting } from './api.ts';
import { handleMessage } from './handlers.ts';

import config from './config.ts';
const { DENO_KV_PATH } = config;

const kv = await Deno.openKv(DENO_KV_PATH + '/kv');

export async function poke() {
	console.log('RUNNING POKE');

	const waitingIds = [];
	const waitingEntries = kv.list<ScheduleObj>({ prefix: ['WAITING'] });
	for await (const waitingEntry of waitingEntries) {
		waitingIds.push(waitingEntry.value.chatId);
	}

	const iter = kv.list({ prefix: ['STORY-STATE'] });

	const chatIds = new Set<string>();
	for await (const res of iter) {
		chatIds.add(res.key[1] as string);
	}

	const UNTIL = 'credits';
	const untilIndex = availableNodes.indexOf(UNTIL);

	if (untilIndex < 0) {
		console.error('did not find untilIndex');
		return;
	}

	const poked = [];

	for (const chatId of chatIds) {
		const { getBusy, getCurrentNode, getHistory } = useApi(chatId);
		if (await getBusy()) {
			console.warn(`Skipping ${chatId}, is busy`);
		} else if (await isWaiting(chatId)) {
			console.warn(`Skipping ${chatId}, is waiting`);
		} else {
			const currentNode = await getCurrentNode();
			const currentIndex = availableNodes.indexOf(currentNode);
			if (!currentIndex) {
				console.warn(`Skipping ${chatId}, did not find index for ${currentNode}`);
			} else if (currentIndex >= untilIndex) {
				console.warn(`Skipping ${chatId}, currentIndex ${currentIndex} is greater or equal untilIndex ${untilIndex}`);
			} else {
				console.log(`Poking ${chatId}`);
				poked.push({
					chatId,
					currentNode,
					history: await getHistory(),
				});
				try {
					await handleMessage(chatId, '', 'doesnotexist');
				} catch (e) {
					console.error(e);
				}
			}
		}
	}

	for (const p of poked) {
		console.log(`Poked ${p.chatId}, was at ${p.currentNode} with history length ${p.history.length}`);
		const { getCurrentNode, getHistory } = useApi(p.chatId);
		const newCurrentNode = await getCurrentNode();
		const newHistory = await getHistory();
		if (newCurrentNode !== p.currentNode || newHistory.length !== p.history.length) {
			console.log(`Now at ${newCurrentNode} with history length ${newHistory.length}`);
		}
	}
}
