import { SET_FB_LEFT_CONTENT, SET_FB_RIGHT_CONTENT, SET_FB_MAIN_CONTENT } from './../actions/types';

const defState = {
	leftContent: {
		leftActive: 'field'
	},
	mainContent: {
		sections: [],
	}
}

export default {
	leftContent: (state=defState.leftContent, action)=>{
		switch(action){
			case SET_FB_LEFT_CONTENT:
				return Object.assign({}, state, {leftActive: action.active});
			default:
				return state;
		}
	},
	rightContent: (state=defState.rightContent, action)=>{
		switch(action){
			case SET_FB_RIGHT_CONTENT:
				return Object.assign({}, state, {form: actions.form});
		}
	},
	mainContent: (state=defState.mainContent, action)=>{
		switch(action){
			case SET_FB_MAIN_CONTENT:
				return Object.assign({}, state, {sections: action.sections});
			default:
				return state;
		}
	}
}