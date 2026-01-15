This is the somewhat tidied and cleaned source code for [i saw you called](https://www.hebbel-am-ufer.de/en/programme/pdetail/feelings-i-saw-you-called). It does not include all the code for the games (most of which are loose adaptions of existing web games) and the voice messages because they make the repo quite big.

Important bits happen in `index.ts` and `handlers.ts`. The code is designed for one bot that you interact with. There's another bot called "onboarding" that does not use yarn script which takes care of the initial introduction.

Uses [Yarn Spinner](https://www.yarnspinner.dev/) scripts for bot scripts.
