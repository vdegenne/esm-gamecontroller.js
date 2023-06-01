# 🎮 esm-gamecontroller.js

A esm port of [gamecontroller.js](https://github.com/alvaromontoro/gamecontroller.js).

All credit goes to:
- [@alvaromontoro](https://github.com/alvaromontoro): Original author of `gamecontroller.js`
- [@JumpLink](https://github.com/JumpLink): Author of the pull request [Migrate to Typescript #31](https://github.com/alvaromontoro/gamecontroller.js/pull/31) which is supposed to provide declaration types for the library.

However the original author doesn't seem to be active anymore, so I took JumpLink TS version and made a build step to convert it to ESM which is recommended if you want to include the source in your final build anyway.

On top of that I wrote some mappings so it's easier to find a button and use them in functions, e.g.

```typescript
import {XBoxButton} from 'esm-gamecontroller.js';

gamepad.on(XBoxButton.START, () => {
	// ... pause the game or continue
})
```

## Installation

```
npm add -D esm-gamecontroller.js
```

## Usage

```typescript
import gameControl, { GCGamepad } from 'esm-gamecontroller.js';

gameControl.on('connect', (gamepad: GCGamepad) => {
	// May the types lead you young padawan...
})
```