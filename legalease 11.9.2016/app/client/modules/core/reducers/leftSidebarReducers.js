import { 
	LEFT_SIDEBAR_CLOSE, 
	LEFT_SIDEBAR_TOGGLE, 
	LEFT_SIDEBAR_OPEN,
	LEFT_SIDEBAR_SET_WIDTH,
	LEFT_SIDEBAR_SET_DESKTOP,
	LEFT_SIDEBAR_SET_TABLET,
	LEFT_SIDEBAR_SET_MOBILE, 
	LEFT_SIDEBAR_DOCK,
	LEFT_SIDEBAR_UNDOCK
} from './../actions/types';


export default {
	leftsidebar: (state = {}, action) => {
		switch(action.type){
			case LEFT_SIDEBAR_OPEN:
				return Object.assign({}, state, {leftSidebarOpen: true});
			case LEFT_SIDEBAR_CLOSE:
				return Object.assign({}, state, {leftSidebarOpen: false});
			case LEFT_SIDEBAR_DOCK:
				return Object.assign({}, state, {leftSidebarDocked: true});
			case LEFT_SIDEBAR_UNDOCK:
				return Object.assign({}, state, {leftSidebarDocked: false});
			case LEFT_SIDEBAR_SET_WIDTH:
				return Object.assign({}, state, {leftSidebarWidth: action.width});
			case LEFT_SIDEBAR_SET_MOBILE:
				return Object.assign({}, state, 
					{
						leftSidebarOpen: false,
						leftSidebarWidth: 0,
						leftSidebarDocked: false
				});
			case LEFT_SIDEBAR_SET_TABLET:
				return Object.assign({}, state, 
					{
						leftSidebarOpen: true,
						leftSidebarWidth: 70,
						leftSidebarDocked: true
				});
			case LEFT_SIDEBAR_SET_DESKTOP:
				return Object.assign({}, state, 
					{
						leftSidebarOpen: true,
						leftSidebarWidth: 256,
						leftSidebarDocked: true
				});
			default:
				return state;
		}
	}
}