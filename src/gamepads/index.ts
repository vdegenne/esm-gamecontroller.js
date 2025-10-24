import PowerAXBox from './powera-xbox-series-x-wired-controller-opp-black.js';

export type ButtonName =
	| 'button0'
	| 'button1'
	| 'button2'
	| 'button3'
	| 'button4'
	| 'button5'
	| 'button6'
	| 'button7'
	| 'button8'
	| 'button9'
	| 'button10'
	| 'axis0'
	| 'axis1'
	| 'axis2'
	| 'axis3'
	| 'axis4'
	| 'axis5'
	| 'axis6'
	| 'axis7';

interface XBoxMapping {
	LEFT_BUMPER: ButtonName;
	RIGHT_BUMPER: ButtonName;
	LEFT_TRIGGER?: ButtonName;
	RIGHT_TRIGGER?: ButtonName;

	UP?: ButtonName;
	LEFT_STICK_UP?: ButtonName;
	LEFT_STICK_LEFT?: ButtonName;
	RIGHT?: ButtonName;
	DOWN?: ButtonName;
	LEFT_STICK_DOWN?: ButtonName;
	LEFT?: ButtonName;
	LEFT_STICK_RIGHT?: ButtonName;
	LEFT_STICK_PRESS?: ButtonName;

	DPAD_UP: ButtonName;
	DPAD_RIGHT: ButtonName;
	DPAD_DOWN: ButtonName;
	DPAD_LEFT: ButtonName;

	A: ButtonName;
	B: ButtonName;
	X: ButtonName;
	Y: ButtonName;

	RIGHT_STICK_UP?: ButtonName;
	RIGHT_STICK_RIGHT?: ButtonName;
	RIGHT_STICK_DOWN?: ButtonName;
	RIGHT_STICK_LEFT?: ButtonName;
	RIGHT_STICK_PRESS?: ButtonName;

	BACK?: ButtonName;
	START?: ButtonName;

	GUIDE?: ButtonName;
	SHARE?: ButtonName;
}

export interface GamepadModel {
	name: string;
	mapping: XBoxMapping;
}

const mappings = {
	[PowerAXBox.name]: PowerAXBox.mapping,
};

export function getMappingFromModel(modelName: string) {
	const mapping = mappings[modelName];
	if (!mapping) {
		throw new Error('Controller mapping not found');
	}
	return mapping;
}
