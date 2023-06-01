import gameControl, {XboxButtons} from '../src/index.js'

gameControl.on('connect', (gamepad) => {
	console.log(
	gamepad.on(XboxButtons.RIGHT_BUMPER, () => {
		console.log(
		'nice'
		)
	})
	)
})