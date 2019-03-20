import { 
	SET_VIEW
} from './../actions/types';

const viewDefault = {
	view: 'desktop',
	subview: ''
}

export default {
	layout: (state = viewDefault, action) => {
		switch(action.type){
			case SET_VIEW:
				return Object.assign({}, state, {view:action.view, subview: action.subview});
			default:
				return state;
		}
	}
}