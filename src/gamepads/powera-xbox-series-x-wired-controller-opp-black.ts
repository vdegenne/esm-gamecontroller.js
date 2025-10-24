import {type GamepadModel} from './index.js';

const model: GamepadModel = {
	name: 'PowerA Xbox Series X Wired Controller OPP Black (Vendor: 20d6 Product: 2005)',
	mapping: {
		LEFT_BUMPER: 'button4',
		LEFT_TRIGGER: 'axis2',
		RIGHT_BUMPER: 'button5',
		RIGHT_TRIGGER: 'axis5',

		UP: 'axis1',
		LEFT_STICK_UP: 'axis1',
		RIGHT: 'axis0',
		LEFT_STICK_RIGHT: 'axis0',
		DOWN: 'axis1',
		LEFT_STICK_DOWN: 'axis1',
		LEFT: 'axis0',
		LEFT_STICK_LEFT: 'axis0',
		LEFT_STICK_PRESS: 'button10',

		DPAD_UP: 'axis7',
		DPAD_RIGHT: 'axis6',
		DPAD_DOWN: 'axis7',
		DPAD_LEFT: 'axis6',

		A: 'button0',
		B: 'button1',
		X: 'button2',
		Y: 'button3',

		RIGHT_STICK_UP: 'axis4',
		RIGHT_STICK_RIGHT: 'axis3',
		RIGHT_STICK_DOWN: 'axis4',
		RIGHT_STICK_LEFT: 'axis4',
		RIGHT_STICK_PRESS: 'button9',

		BACK: 'button6',
		START: 'button7',

		GUIDE: 'button8',

		// SHARE BUTTON DOESNT WORK?
		// SHARE: '?'
	},
};

export default model;
