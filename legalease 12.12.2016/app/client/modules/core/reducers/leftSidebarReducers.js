import * as constants from './../../../config/constants';


export default {
	leftsidebar: (state = {leftSidebarOpen: false}, action) => {
		switch(action.type){
			case constants.LEFT_SIDEBAR_OPEN:
				return Object.assign({}, state, {leftSidebarOpen: true});
			case constants.LEFT_SIDEBAR_CLOSE:
				return Object.assign({}, state, {leftSidebarOpen: false});
			case constants.LEFT_SIDEBAR_DOCK:
				return Object.assign({}, state, {leftSidebarDocked: true});
			case constants.LEFT_SIDEBAR_UNDOCK:
				return Object.assign({}, state, {leftSidebarDocked: false});
			case constants.LEFT_SIDEBAR_SET_WIDTH:
				return Object.assign({}, state, {leftSidebarWidth: action.width});
			case constants.LEFT_SIDEBAR_SET_MOBILE:
				return Object.assign({}, state, 
					{
						leftSidebarWidth: 0,
						leftSidebarDocked: false
				});
			case constants.LEFT_SIDEBAR_SET_TABLET:
				return Object.assign({}, state, 
					{
						leftSidebarWidth: 70,
						leftSidebarDocked: true
				});
			case constants.LEFT_SIDEBAR_SET_DESKTOP:
				return Object.assign({}, state, 
					{
						leftSidebarWidth: 256,
						leftSidebarDocked: true
				});
			default:
				return state;
		}
	}
}