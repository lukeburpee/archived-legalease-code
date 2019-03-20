import { 
	FAB_TOGGLE,
	FAB_OPEN,
	FAB_CLOSE,
	FAB_SET_ITEMS,
	FAB_START_TRANSITION,
	FAB_STOP_TRANSITION
} from './../actions/types';

const fabDefault = {
	fabInTransition:false,
	fabOpen:false
}

export default {
	fab: (state = fabDefault, action) => {
		switch(action.type){
			case FAB_TOGGLE:
				return Object.assign({}, state, {fabOpen: typeof action.open === 'undefined' ? !state.fabOpen : action.open});
			case FAB_OPEN:
				return Object.assign({}, state, {fabOpen: true});
			case FAB_CLOSE:
				return Object.assign({}, state, {fabOpen:false});
			case FAB_START_TRANSITION:
				return Object.assign({}, state, {fabInTransition: true});
			case FAB_STOP_TRANSITION:
				return Object.assign({}, state, {fabInTransition: false});
			default:
				return state;
		}
	}
};