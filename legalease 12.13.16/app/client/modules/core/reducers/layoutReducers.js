import * as constants from './../../../config/constants';

const viewDefault = {
	title: '',
	view: 'desktop',
	subview: ''
}

export default {
	layout: (state = viewDefault, action) => {
		switch(action.type){
			case constants.SET_TITLE:
				return Object.assign({}, state, {title:action.title});
			case constants.SET_VIEW:
				return Object.assign({}, state, {view:action.view, subview: action.subview});
			default:
				return state;
		}
	}
}