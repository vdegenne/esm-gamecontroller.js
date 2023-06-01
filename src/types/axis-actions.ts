import type {GCAction} from './action.js';

export interface GCAxisActions {
	[id: number]: {
		down: GCAction;
		left: GCAction;
		right: GCAction;
		up: GCAction;
	};
}
