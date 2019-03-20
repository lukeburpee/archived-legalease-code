import { combineReducers } from 'redux';
import { TOGGLE_SECONDARY_OPEN, TOGGLE_SECONDARY_CLOSE } from './../actions';

const toggleSecondary = (state = {secondaryOpen: false}, action) => {
	switch(action.type){
		case TOGGLE_SECONDARY_OPEN:
			return Object.assign({}, state, { secondaryOpen: true })
		case TOGGLE_SECONDARY_CLOSE:
			return Object.assign({}, state, { secondaryOpen: false })
		default:
			return state
	}
}

export default combineReducers({
	toggleSecondary
});