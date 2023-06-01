import type {GCDirection} from './direction.js';
import type {GCType} from './type.js';
import type {GCButtonActions} from './button-actions.js';
import type {GCAxisActions} from './axis-actions.js';
import {Button} from '../gamepad-button-maps.js';

export type EventName = (typeof Button)[keyof typeof Button];

export interface GCGamepad {
	id: number;
	buttons: number;
	axes: number;
	axeValues: number[][];
	axeThreshold: number[];
	hapticActuator: GamepadHapticActuator | null;
	vibrationMode: number;
	vibration: boolean;
	mapping: GamepadMappingType;
	buttonActions: GCButtonActions;
	axesActions: GCAxisActions;
	pressed: {
		[key: string]: boolean;
	};

	set(property: string, value: any): void;
	vibrate(value: number, duration: number): Promise<boolean>;
	triggerDirectionalAction(
		id: GCDirection,
		axe: number,
		condition: boolean,
		x: number,
		index: number
	): void;
	checkStatus(): void;
	associateEvent(
		eventName: string,
		callback: () => void,
		type: GCType
	): GCGamepad;
	on(eventName: EventName, callback: () => void): GCGamepad;
	/** Stop to listen to the event. */
	off(eventName: EventName, callback: () => void): GCGamepad | void;
	/** Triggered the first cycle that a button/joystick is pressed. */
	before(eventName: EventName, callback: () => void): GCGamepad | void;
	/** Triggered the first cycle after a button/joystick stopped being pressed. */
	after(eventName: EventName, callback: () => void): GCGamepad | void;
}
