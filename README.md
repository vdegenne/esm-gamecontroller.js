# esm-gamecontroller.js

A esm port of [gamecontroller.js](https://github.com/alvaromontoro/gamecontroller.js)

All credit goes to:
- [@alvaromontoro](https://github.com/alvaromontoro): Original author of `gamecontroller.js`
- [@JumpLink](https://github.com/JumpLink): Author of the pull request [Migrate to Typescript #31](https://github.com/alvaromontoro/gamecontroller.js/pull/31) which is supposed to provide declaration types for the library.

However the original author doesn't seem to be active anymore, so I made this esm version (which is the new trend).  

*If you need the browser version, the original package `gamecontroller.js` is still valid*. Use this library only if you need it as a dependency in your TS or ESM workflow.

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