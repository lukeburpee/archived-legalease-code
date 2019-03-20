import { 
	RIGHT_SIDEBAR_TOGGLE,
	RIGHT_SIDEBAR_SET_WIDTH
} from './../actions/types';

const rsDefault = {
	rightSidebarOpen:false,
	rightSidebarWidth:''
};

export default {
	rightsidebar: (state = rsDefault, action) => {
		switch(action.type){
			case RIGHT_SIDEBAR_TOGGLE:
				return Object.assign({}, state, {rightSidebarOpen: typeof action.open === 'undefined' ? !state.rightSidebarOpen : action.open});
			case RIGHT_SIDEBAR_SET_WIDTH:
				return Object.assign({}, state, {rightSidebarWidth: action.width});
			default:
				return state;
		}
	}
}