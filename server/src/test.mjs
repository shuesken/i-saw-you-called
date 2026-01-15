import YarnBound from 'yarn-bound';
import { dialogue } from './test_dialogue.mjs';

const runner = new YarnBound({ dialogue });

const nodes = Object.keys(runner.runner.yarnNodes);

console.log(nodes);
for (const node of Object.keys(runner.runner.yarnNodes)) {
	console.log('trying', node);
	runner.jump(node);
}
