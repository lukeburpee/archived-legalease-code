import * as constants from './../../../config/constants';

const mattersDefault = {
	selected: '',
	searches: []
}

export default {
	matters: (state = mattersDefault, action) => {
		switch(action.type){
			case constants.SET_MATTER_SELECTED:
				return Object.assign({}, state, {selected: action.selected});
			case constants.SET_MATTER_LIST:
				return Object.assign({}, state, {matters: action.matters});
			case constants.CLEAR_SELECTED_MATTER:
				return Object.assign({}, state, {selected: ''});
			case constants.SET_MATTER_SEARCHES:
				return Object.assign({}, state, {searches: action.searches});
			default:
				return state;
		}
	}
};