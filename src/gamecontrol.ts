import {log, error, isGamepadSupported} from './tools.js';
import {MESSAGES} from './constants.js';
import _gamepad from './gamepad.js';
import type {
	GameControl,
	GCGamepads,
	GCGamepad,
	GCCallback,
	GCConnectCallback,
	GCDisconnectCallback,
} from './types/index.js';

// declare global {
// 	interface Window {
// 		gamepads: {
// 			[id: number]: Gamepad;
// 		};
// 	}
// }

const gamepads: (Gamepad | null)[] = [null, null, null, null];

const gameControl: GameControl = {
	gamepads: {} as GCGamepads,
	axeThreshold: [1.0], // this is an array so it can be expanded without breaking in the future
	isReady: isGamepadSupported(),
	onConnect: function (_gamepad: GCGamepad) {} as GCConnectCallback,
	onDisconnect: function (_index: number) {} as GCDisconnectCallback,
	onBeforeCycle: function () {} as GCCallback,
	onAfterCycle: function () {} as GCCallback,
	getGamepads: function () {
		return this.gamepads;
	},
	getGamepad: function (id: number) {
		if (this.gamepads[id]) {
			return this.gamepads[id];
		}
		return null;
	},
	set: function (property: string, value: any) {
		const properties = ['axeThreshold'];
		if (properties.indexOf(property) >= 0) {
			if (
				property === 'axeThreshold' &&
				(!parseFloat(value) || value < 0.0 || value > 1.0)
			) {
				error(MESSAGES.INVALID_VALUE_NUMBER);
				return;
			}

			(this as any)[property] = value;

			if (property === 'axeThreshold') {
				const gps = this.getGamepads();
				const ids = Object.keys(gps);
				for (let x = 0; x < ids.length; x++) {
					gps[ids[x]].set('axeThreshold', this.axeThreshold);
				}
			}
		} else {
			error(MESSAGES.INVALID_PROPERTY);
		}
	},
	checkStatus: function () {
		const requestAnimationFrame =
			window.requestAnimationFrame ||
			(window as any).webkitRequestAnimationFrame;
		const gamepadIds = Object.keys(gameControl.gamepads);

		gameControl.onBeforeCycle();

		for (let x = 0; x < gamepadIds.length; x++) {
			gameControl.gamepads[gamepadIds[x]].checkStatus();
		}

		gameControl.onAfterCycle();

		if (gamepadIds.length > 0) {
			requestAnimationFrame(gameControl.checkStatus);
		}
	},
	init: function () {
		const onConnect = (gamepad: Gamepad, index: number) => {
			// log(MESSAGES.ON);
			if (gamepad.index !== index) {
				console.warn('Something not quite right here.');
			}
			console.log(`${gamepad.id} just got connected.`);
			gamepads[index] = gamepad;
			const gcgamepad = _gamepad.init(gamepad);
			gcgamepad.set('axeThreshold', this.axeThreshold);
			this.gamepads[gcgamepad.id] = gcgamepad;
			this.onConnect(this.gamepads[gcgamepad.id]);
			if (Object.keys(this.gamepads).length === 1) this.checkStatus();
		};
		const onDisconnect = (index: number) => {
			// log(MESSAGES.OFF);
			const gamepad = gamepads[index] as Gamepad;
			if (gamepad.index !== index) {
				console.warn('Something not quite right here.');
			}
			console.log(`${gamepad.id} got disconnected.`);
			gamepads[index] = null;
			delete this.gamepads[index];
			this.onDisconnect(index);
		};
		let detectGamepadChangesFunctionDebouncer: NodeJS.Timeout;
		function detectGamepadChangesFunction() {
			if (detectGamepadChangesFunctionDebouncer) {
				clearTimeout(detectGamepadChangesFunctionDebouncer);
			}
			detectGamepadChangesFunctionDebouncer = setTimeout(() => {
				navigator.getGamepads().forEach((gamepad, index) => {
					if (gamepad !== null && gamepads[index] === null) {
						onConnect(gamepad, index);
					} else if (gamepad === null && gamepads[index] !== null) {
						onDisconnect(index);
					}
				});
			}, 40);
		}
		window.addEventListener('gamepadconnected', detectGamepadChangesFunction);
		window.addEventListener(
			'gamepaddisconnected',
			detectGamepadChangesFunction
		);
		setInterval(detectGamepadChangesFunction, 700);
		detectGamepadChangesFunction();
		// window.addEventListener('gamepadconnected', (e) => {
		// 	// const egp: GamepadEvent['gamepad'] =
		// 	// 	e.gamepad || (e as any).detail.gamepad;
		// 	// if (!gamepads) window.gamepads = {};
		// 	// if (egp) {
		// 	if (!gamepads[egp.index]) {
		// 		gamepads[egp.index] = egp;
		// 		const gp = _gamepad.init(egp);
		// 		gp.set('axeThreshold', this.axeThreshold);
		// 		this.gamepads[gp.id] = gp;
		// 		this.onConnect(this.gamepads[gp.id]);
		// 	}
		// 	if (Object.keys(this.gamepads).length === 1) this.checkStatus();
		// 	// }
		// });
		// window.addEventListener('gamepaddisconnected', (e) => {
		// 	const egp = e.gamepad || (e as any).detail.gamepad;
		// 	if (egp) {
		// 		delete gamepads[egp.index];
		// 		delete this.gamepads[egp.index];
		// 		this.onDisconnect(egp.index);
		// 	}
		// });
	},
	on: function (
		eventName: string,
		callback: GCCallback | GCConnectCallback | GCDisconnectCallback
	) {
		switch (eventName) {
			case 'connect':
				this.onConnect = callback as GCConnectCallback;
				break;
			case 'disconnect':
				this.onDisconnect = callback as GCDisconnectCallback;
				break;
			case 'beforeCycle':
			case 'beforecycle':
				this.onBeforeCycle = callback as GCCallback;
				break;
			case 'afterCycle':
			case 'aftercycle':
				this.onAfterCycle = callback as GCCallback;
				break;
			default:
				error(MESSAGES.UNKNOWN_EVENT);
				break;
		}
		return this;
	},
	off: function (eventName: string) {
		switch (eventName) {
			case 'connect':
				this.onConnect = function (_gamepad: GCGamepad) {};
				break;
			case 'disconnect':
				this.onDisconnect = function (_index: number) {};
				break;
			case 'beforeCycle':
			case 'beforecycle':
				this.onBeforeCycle = function () {};
				break;
			case 'afterCycle':
			case 'aftercycle':
				this.onAfterCycle = function () {};
				break;
			default:
				error(MESSAGES.UNKNOWN_EVENT);
				break;
		}
		return this;
	},
};

gameControl.init();

export default gameControl;
