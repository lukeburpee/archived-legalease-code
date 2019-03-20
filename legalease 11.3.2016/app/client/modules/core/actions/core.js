import { 
	THEME, 
	SET_USER,
	SET_VIEW,
	SET_PAGE,
	RESIZE, 
	PAGE_SET_DESKTOP,
	PAGE_SET_TABLET,
	PAGE_SET_MOBILE,
	RIGHT_SIDEBAR_TOGGLE,
	LEFT_SIDEBAR_OPEN,
	LEFT_SIDEBAR_CLOSE,
	LEFT_SIDEBAR_TOGGLE,
	LEFT_SIDEBAR_DOCK,
	LEFT_SIDEBAR_UNDOCK,
	LEFT_SIDEBAR_SET_WIDTH,
	LEFT_SIDEBAR_SET_DESKTOP,
	LEFT_SIDEBAR_SET_TABLET,
	LEFT_SIDEBAR_SET_MOBILE,
	LEFT_TROUGH_OPEN,
	LEFT_TROUGH_CLOSE,
	LEFT_TROUGH_TOGGLE,
	LEFT_TROUGH_SET_TYPE,
	RIGHT_TROUGH_TOGGLE,
	RIGHT_TROUGH_OPEN,
	RIGHT_TROUGH_CLOSE,
	RIGHT_TROUGH_SET_TYPE,
	TROUGHS_OPEN,
	PRIMARY_SET_WIDTH,
	FAB_TOGGLE,
	FAB_START_TRANSITION,
	FAB_STOP_TRANSITION,
	FAB_OPEN,
	FAB_CLOSE,
	FAB_SET_ICON,
	FAB_SET_ITEMS
} from './types';

export default {
	setTheme({ dispatch }, theme) {
		dispatch({
			type: THEME,
			theme: THEME
		});
	},
	setUser({ dispatch }, user) {
		dispatch({
			type: SET_USER,
			user: user
		})
	},
	setView(view, subview){
		return {
			type: SET_VIEW,
			view: view,
			subview: subview
		}
	},
	setPrimaryWidth(page, offset, left, right, leftOpen, rightOpen){
		const width = page - offset - left - right;
		console.log(page);
		console.log(offset);
		console.log(left);
		console.log(right);
		console.log(width);
		return {
			type: PRIMARY_SET_WIDTH,
			width
		}
	},
	startFabTransition(){
		return {
			type: FAB_START_TRANSITION
		};
	},
	toggleFab(open){
		return {
			type: FAB_TOGGLE,
			open
		}
	},
	stopFabTransition(){
		return {
			type: FAB_STOP_TRANSITION
		}
	},
	closeFab(){
		return {
			type: FAB_CLOSE
		}
	},
	closeLeftSidebar() {
		return {
			type: LEFT_SIDEBAR_CLOSE
		}
	},
	openLeftSidebar() {
		return {
			type: LEFT_SIDEBAR_OPEN
		}
	},
	toggleLeftSidebar(open) {
		return {
			type: LEFT_SIDEBAR_TOGGLE,
			open
		}
	},
	dockLeftSidebar() {
		return {
			type: LEFT_SIDEBAR_DOCK
		}
	},
	undockLeftSidebar(){
		return {
			type: LEFT_SIDEBAR_UNDOCK
		}
	},
	setLeftSidebarWidth(width){
		return {
			type: LEFT_SIDEBAR_SET_WIDTH,
			width
		}
	},
	setLeftSidebarDesktop(){
		return {
			type: LEFT_SIDEBAR_SET_DESKTOP
		}
	},
	setLeftSidebarTablet(){
		return {
			type: LEFT_SIDEBAR_SET_TABLET
		}
	},
	setLeftSidebarMobile(){
		return {
			type: LEFT_SIDEBAR_SET_MOBILE
		}
	},
	setPageDesktop(){
		return {
			type: PAGE_SET_DESKTOP
		}
	},
	setPageTablet(){
		return {
			type: PAGE_SET_TABLET
		}
	},
	setPageMobile(){
		return {
			type: PAGE_SET_MOBILE
		}
	},
	toggleRightSidebar(open) {
		dispatch({
			type: RIGHT_SIDEBAR_TOGGLE,
			open
		})
	},
	leftTroughOpen(leftType, width){
		return {
			type: LEFT_TROUGH_OPEN,
			leftType,
			width
		}
	},
	leftTroughClose(){
		return {
			type: LEFT_TROUGH_CLOSE
		}
	},
	setLeftTroughType(leftType, width){
		return {
			type: LEFT_TROUGH_SET_TYPE,
			leftType,
			width
		}
	},
	toggleLeftTrough(open) {
		dispatch({
			type: LEFT_TROUGH_TOGGLE,
			open
		})
	},
	toggleRightTrough(open) {
		dispatch({
			type: RIGHT_TROUGH_TOGGLE,
			open
		})
	},
	rightTroughOpen(rightType, width) {
		return {
			type: RIGHT_TROUGH_OPEN,
			rightType,
			width
		}
	},
	setRightTroughType(rightType, width){
		return {
			type: RIGHT_TROUGH_SET_TYPE,
			rightType,
			width
		}
	},
	openTroughs({dispatch}, leftType, leftWidth, rightType, rightWidth){
		return function(dispatch){
			() => dispatch(openLeft(leftType, leftWidth)),
			() => dispatch(openRight(rightType, rightWidth))
		}
	},
	rightTroughClose() {
		return {
			type: RIGHT_TROUGH_CLOSE
		}
	}
}
function openLeft(leftType, width){
	return {
		type: LEFT_TROUGH_OPEN,
		leftType, 
		width
	}
}

function openRight(rightType, width){
	return {
		type: RIGHT_TROUGH_OPEN,
		rightType,
		width
	}
}

function stopFabTransition(){
		return {
			type: FAB_STOP_TRANSITION
		};
};
function setFab(open){
	return {
		type: FAB_TOGGLE,
		open
	}
}