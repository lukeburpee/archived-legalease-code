import { TOGGLE_UTILITIES, SET_ACTIVE_UTILITY } from './../actions/types';

const defaultState = {
	fab: null,
	utilities: false,
	mainHeight:null,
	minorHeight:null,
	videoChat: true,
	videoChatCount: 4,
	active: ''
};

export default {
	interface: (state = defaultState, action) => {
		switch(action.type){
			case TOGGLE_UTILITIES:
				return Object.assign({}, state, {
					utilities: !state.utilities,
					active: action.active,
					mainHeight: action.mainHeight,
					minorHeight: action.minorHeight
				});
			case SET_ACTIVE_UTILITY:
				return Object.assign({}, state, {
					active: action.active,
					mainHeight: action.mainHeight,
					minorHeight: action.minorHeight
				})
			default:
				return state;
		}
	}
}