declare module 'yarn-bound' {
	import bondage from '@mnbroatch/bondage/src/index.js';
	import * as BondageResults from '@mnbroatch/bondage/src/results.js';
	import { Runner } from '@mnbroatch/bondage/src/runner.js';

	export interface YarnBoundOptions {
		dialogue: string;
		variableStorage?: unknown;
		functions?: Record<string, (...args: Array<unknown>) => unknown>;
		handleCommand?: (...args: Array<unknown>) => unknown;
		combineTextAndOptionsResults?: boolean;
		locale?: string;
		pauseCommand?: string;
		startAt?: string;
	}

	interface TextResult {
		text: string;
		hashtags: string[];
		metadata: any;
		constructor: TextResult;
	}

	interface OptionsResult {
		options: {
			text: string;
			isAvailable: boolean;
			hashtags: string[];
		}[];
		metadata: any;
		constructor: OptionsResult;
	}

	interface CommandResult {
		command: string;
		hashtags: string[];
		metadata: any;
		constructor: CommandResult;
	}

	type Result = TextResult | OptionsResult | CommandResult;

	class YarnBound {
		static readonly CommandResult = BondageResults.CommandResult;
		static readonly OptionsResult = BondageResults.OptionsdResult;
		static readonly TextResult = BondageResults.TextResult;

		readonly handleCommand: (...args: Array<unknown>) => unknown;
		readonly pauseCommand: string;
		readonly combineTextAndOptionsResults: boolean;
		readonly bondage: bondage;
		readonly bufferedNode: unknown;
		readonly currentResult: Result;
		readonly history: Array<unknown>;
		readonly locale: string;
		readonly runner: Runner;

		constructor(options: YarnBoundOptions);

		jump(startAt: unknown): void;

		advance(optionIndex?: number): void;

		registerFunction(name: string, func: () => void): void;
	}

	export default YarnBound;
}
