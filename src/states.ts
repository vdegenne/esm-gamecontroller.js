import {type GCGamepad} from './types';

export enum Modes {
	NORMAL = 0,
	PRIMARY = 1,
	SECONDARY = 2,
	TERTIARY = 3,
}

let _gamepad: GCGamepad;
export function setStateGamepad(gamepad: GCGamepad) {
	_gamepad = gamepad;
}

export function getMode(gamepad: GCGamepad = _gamepad) {
	if (_gamepad === undefined) {
		throw new Error("A gamepad wasn't provided.");
	}
	if (isNormal(gamepad)) {
		return Modes.NORMAL;
	}
	if (isPrimary(gamepad)) {
		return Modes.PRIMARY;
	}
	if (isSecondary(gamepad)) {
		return Modes.SECONDARY;
	}
	if (isTertiary(gamepad)) {
		return Modes.TERTIARY;
	}
}

function isNormal(gamepad: GCGamepad) {
	return !gamepad!.pressed.button6 && !gamepad!.pressed.button7;
	// return !modifiers.LT && modifiers.RT;
}
function isPrimary(gamepad: GCGamepad) {
	return gamepad!.pressed.button6 && !gamepad!.pressed.button7;
	// return !modifiers.LT && modifiers.RT;
}
function isSecondary(gamepad: GCGamepad) {
	return !gamepad!.pressed.button6 && gamepad!.pressed.button7;
	// return !modifiers.LT && modifiers.RT;
}
function isTertiary(gamepad: GCGamepad) {
	return gamepad!.pressed.button6 && gamepad!.pressed.button7;
	// return modifiers.LT && modifiers.RT;
}
