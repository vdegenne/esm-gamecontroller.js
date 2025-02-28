/**
 * @license
 * Copyright (c) 2023 Valentin Degenne
 * SPDX-License-Identifier: MIT
 */

export const Button = {
	/**
	 * button 0
	 */
	BUTTON0: 'button0',
	/**
	 * button 1
	 */
	BUTTON1: 'button1',
	/**
	 * button 2
	 */
	BUTTON2: 'button2',
	/**
	 * button 3
	 */
	BUTTON3: 'button3',
	/**
	 * button 4
	 */
	BUTTON4: 'button4',
	/**
	 * button 5
	 */
	BUTTON5: 'button5',
	/**
	 * button 6
	 */
	BUTTON6: 'button6',
	/**
	 * button 7
	 */
	BUTTON7: 'button7',
	/**
	 * button 8 (select button)
	 */
	BUTTON8: 'button8',
	/**
	 * button 9 (start button)
	 */
	BUTTON9: 'button9',
	/**
	 * button 10
	 */
	BUTTON10: 'button10',
	/**
	 * button 11
	 */
	BUTTON11: 'button11',
	/**
	 * button 12
	 */
	BUTTON12: 'button12',
	/**
	 * button 13
	 */
	BUTTON13: 'button13',
	/**
	 * button 14
	 */
	BUTTON14: 'button14',
	/**
	 * button 15
	 */
	BUTTON15: 'button15',
	/**
	 * button 16
	 */
	BUTTON16: 'button16',
	/**
	 * first axe/joystick up button
	 */
	UP0: 'up0',
	/**
	 * first axe/joystick down button
	 */
	DOWN0: 'down0',
	/**
	 * first axe/joystick right button
	 */
	RIGHT0: 'right0',
	/**
	 * first axe/joystick left button
	 */
	LEFT0: 'left0',
	/**
	 * second axe/joystick up button
	 */
	UP1: 'up1',
	/**
	 * second axe/joystick down button
	 */
	DOWN1: 'down1',
	/**
	 * second axe/joystick right button
	 */
	RIGHT1: 'right1',
	/**
	 * second axe/joystick left button
	 */
	LEFT1: 'left1',
	/**
	 * select button (alias for button8)
	 */
	SELECT: 'button8',
	/**
	 * start button (alias for button9)
	 */
	START: 'button9',
	/**
	 * power button (alias for button16)
	 */
	POWER: 'button16',
	/**
	 * left back button 1 (alias for button4)
	 */
	L1: 'l1',
	/**
	 * left back button 2 (alias for button6)
	 */
	L2: 'l2',
	/**
	 * right back button 1 (alias for button5)
	 */
	R1: 'r1',
	/**
	 * right back button 2 (alias for button7)
	 */
	R2: 'r2',
	/**
	 * first axe/joystick up button (alias for up0)
	 */
	UP: 'up0',
	/**
	 * first axe/joystick down button (alias for down0)
	 */
	DOWN: 'down0',
	/**
	 * first axe/joystick right button (alias for right0)
	 */
	RIGHT: 'right0',
	/**
	 * first axe/joystick left button (alias for left0)
	 */
	LEFT: 'left0',
} as const;

export enum XBoxButton {
	/**
	 * A button.
	 */
	A = 'button0',
	/**
	 * B button.
	 */
	B = 'button1',
	/**
	 * X button.
	 */
	X = 'button2',
	/**
	 * Y button.
	 */
	Y = 'button3',
	/**
	 * Left bumper.
	 */
	LEFT_BUMPER = 'button4',
	/**
	 * Right bumper.
	 */
	RIGHT_BUMPER = 'button5',
	/**
	 * Left trigger.
	 */
	LEFT_TRIGGER = 'button6',
	/**
	 * Right trigger.
	 */
	RIGHT_TRIGGER = 'button7',
	/**
	 * Start button.
	 */
	BACK = 'button8',
	/**
	 * Select button.
	 */
	START = 'button9',
	/**
	 * Left stick press.
	 */
	LEFT_STICK_PRESS = 'button10',
	/**
	 * Right stick press.
	 */
	RIGHT_STICK_PRESS = 'button11',
	/**
	 * D-pad (Directional pad) up.
	 */
	DPAD_UP = 'button12',
	/**
	 * D-pad (Directional pad) down.
	 */
	DPAD_DOWN = 'button13',
	/**
	 * D-pad (Directional pad) left.
	 */
	DPAD_LEFT = 'button14',
	/**
	 * D-pad (Directional pad) right.
	 */
	DPAD_RIGHT = 'button15',
	/**
	 * Guide button.
	 */
	GUIDE = 'button16',
	/**
	 * Left stick up.
	 */
	LEFT_STICK_UP = 'up0',
	/**
	 * Left stick up (alias for LEFT_STICK_UP).
	 */
	UP = 'up0',
	/**
	 * Left stick down.
	 */
	LEFT_STICK_DOWN = 'down0',
	/**
	 * Left stick down (alias for LEFT_STICK_DOWN).
	 */
	DOWN = 'down0',
	/**
	 * Left stick right.
	 */
	LEFT_STICK_RIGHT = 'right0',
	/**
	 * Left stick right (alias for LEFT_STICK_RIGHT).
	 */
	RIGHT = 'right0',
	/**
	 * Left stick left.
	 */
	LEFT_STICK_LEFT = 'left0',
	/**
	 * Left stick left (alias for LEFT_STICK_LEFT).
	 */
	LEFT = 'left0',
	/**
	 * Right stick up.
	 */
	RIGHT_STICK_UP = 'up1',
	/**
	 * Right stick down.
	 */
	RIGHT_STICK_DOWN = 'down1',
	/**
	 * Right stick right.
	 */
	RIGHT_STICK_RIGHT = 'right1',
	/**
	 * Right stick left.
	 */
	RIGHT_STICK_LEFT = 'left1',
}
