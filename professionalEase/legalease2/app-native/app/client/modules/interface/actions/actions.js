import { TOGGLE_UTILITIES, SET_ACTIVE_UTILITY } from './types';

export default {
	toggleUtilities(current, next){
		let heights = getHeights(next)
		let main = heights[0];
		let minor = heights[1];
		console.log(main, minor);
		if (current === ''){
			console.log('setting utilities to open');
			return {
				type: TOGGLE_UTILITIES,
				active: next,
				mainHeight:main,
				minorHeight:minor
			}
		} else if (current === next){
			console.log('closing utilities');
			return {
				type: TOGGLE_UTILITIES,
				active: '',
				mainHeight: main,
				minorHeight: minor
			}
		} else {
			console.log('setting active utility');
			return {
				type: SET_ACTIVE_UTILITY,
				active: next,
				mainHeight:main,
				minorHeight:minor
			}
		}
	}
}

function getHeights(utility){
	switch(utility){
		case 'settings':
			return [2, 1];
		case 'mail':
			return [1, 1.2];
		case 'calendar':
			return [2, 1];
		case 'timers':
			return [2, 1];
		case 'chat':
			return [3, 1];
		default:
			return [null, null];
	}
}