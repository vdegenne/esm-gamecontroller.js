import gameControl, {XBoxButton} from '../src/index.js';

gameControl.on('connect', (gamepad) => {
	gamepad.before(XBoxButton.B, () => {
		console.log('boom');
	});
});
