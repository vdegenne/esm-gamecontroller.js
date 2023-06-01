// This file is the entry point for modules, use this if you do not want to set the global window.gameControl object
export * from './types/index.js';
export {isGamepadSupported} from './tools.js';
export {MESSAGES} from './constants.js';
import gameControl from './gamecontrol.js';

export {gameControl};
export {Button, XBoxButton} from './gamepad-button-maps.js';
export default gameControl;
