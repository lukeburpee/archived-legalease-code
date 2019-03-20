import * as constants from './../../../config/constants';

const fabDefault = {
	fabInTransition:false,
	fabOpen:false
}

export default {
	fab: (state = fabDefault, action) => {
		switch(action.type){
			case constants.FAB_TOGGLE:
				return Object.assign({}, state, {fabOpen: typeof action.open === 'undefined' ? !state.fabOpen : action.open});
			case constants.FAB_OPEN:
				return Object.assign({}, state, {fabOpen: true});
			case constants.FAB_CLOSE:
				return Object.assign({}, state, {fabOpen:false});
			case constants.FAB_START_TRANSITION:
				return Object.assign({}, state, {fabInTransition: true});
			case constants.FAB_STOP_TRANSITION:
				return Object.assign({}, state, {fabInTransition: false});
			default:
				return state;
		}
	}
};