import { combineReducers } from 'redux';

const user = (state = { user: null }, action) => {
	switch (action.type) {
		case 'SET_USER':
			return Object.assign({}, state, { user: action.user })
		default:
			return state
	}
}

export default combineReducers({
	user
});