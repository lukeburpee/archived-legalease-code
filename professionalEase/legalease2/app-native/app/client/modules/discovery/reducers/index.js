import { SET_SEARCH } from './../actions/types';

const defaultState = {
	search: null
};

export default {
	discovery: (state = defaultState, action) => {
		switch(action.type){
			case SET_SEARCH:
				return Object.assign({}, state, {
					search: action.search
				});
			default:
				return state;
		}
	}
}