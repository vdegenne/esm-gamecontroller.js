// This file is the entry point for browsers, this file set's the global window.gameControl object
export * from './types/index.js';
import {error, isGamepadSupported} from './tools.js';
import {MESSAGES} from './constants.js';
import gameControl from './gamecontrol.js';

declare global {
	interface Window {
		gameControl: typeof gameControl;
	}
}

if (isGamepadSupported()) {
	window.gameControl = gameControl;
} else {
	error(MESSAGES.NO_SUPPORT);
}

export {gameControl, isGamepadSupported, MESSAGES};
export default gameControl;
