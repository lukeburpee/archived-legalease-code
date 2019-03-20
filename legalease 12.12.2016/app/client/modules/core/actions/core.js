import * as constants from './../../../config/constants';

export default {
	setTheme({ dispatch }, theme) {
		dispatch({
			type: constants.THEME,
			theme: THEME
		});
	},
	setTitle(title){
		return {
			type: constants.SET_TITLE,
			title
		}
	},
	setLoginEmail(email){
		return {
			type: constants.SET_LOGIN_EMAIL,
			email
		}
	},
	setLoginPassword(password){
		return {
			type: constants.SET_LOGIN_PASSWORD,
			password
		}
	},
	login(dispatch, Meteor, FlowRouter, Roles, email, password){
		Meteor.loginWithPassword(email, password, function(err){
			if (err){
				let reason = err.reason;
				console.log(reason);
				dispatch(setLoginError(reason));

			} else {
				let user = Meteor.user();
				console.log(user);
				dispatch(setUser(Roles, user));
				FlowRouter.go('/matters/new');
			}
		});
	},
	logout(Meteor){
		Meteor.logout();
	},
	setUser({ dispatch }, user) {
		dispatch({
			type: constants.SET_USER,
			user: user
		})
	},
	setUserLinks(user){
		const links = [{name:'dashboard',primaryText:'Dashboard',icon: <object style={iconStyle} tyle="image/svg+xml" data="/icons/dashboard.svg"/>,href: '/dashboard'}];
		const clientsLink = [{name:'clients',primaryText:'Clients',icon: <object style={iconStyle} type="image/svg+xml" data="/icons/clients.svg" />,href: '/clients'}];
  		const firmsLink = [{name:'firms',primaryText:'Firms',icon: <object style={iconStyle} type="image/svg+xml" data="/icons/firms.svg" />,href: '/firms'}];
  		const casesLink = [{name:'cases',primaryText:'Cases',icon: <object style={iconStyle} type="image/svg+xml" data="/icons/cases.svg" />,href:'/cases'}];
  		const mattersLink = [{name:'matters',primaryText:'Matters',icon: <object style={iconStyle} type="image/svg+xml" data="/icons/matters.svg"/>,href:'/matters'}];
  		const discoveryLink = [{name:'discovery',primaryText:'Discovery',icon: <object style={iconStyle} type="image/svg+xml" data="/icons/discovery.svg" />,href:'/discovery'}];
		if (user.type === 'client'){
			links.concat(firmsLink);
		}
		if (user.type === 'firm'){
			links.concat(clientsLink);
		} 
		links.concat(mattersLink);
		if (user.hasCases){
			links.concat(casesLink);
		}
		if (user.hasDiscovery){
			links.concat(discoveryLink);
		}
		return {
			type: constants.SET_USER_LINKS,
			links
		}
	},
	setView(view, subview){
		return {
			type: constants.SET_VIEW,
			view: view,
			subview: subview
		}
	},
	setPrimaryWidth(page, offset, left, right, leftOpen, rightOpen){
		const width = page - left - right;
		console.log(page);
		console.log(offset);
		console.log(left);
		console.log(right);
		console.log(width);
		return {
			type: constants.PRIMARY_SET_WIDTH,
			width
		}
	},
	startFabTransition(){
		return {
			type: constants.FAB_START_TRANSITION
		};
	},
	toggleFab(open){
		return {
			type: constants.FAB_TOGGLE,
			open
		}
	},
	stopFabTransition(){
		return {
			type: constants.FAB_STOP_TRANSITION
		}
	},
	closeFab(){
		return {
			type: constants.FAB_CLOSE
		}
	},
	closeLeftSidebar() {
		return {
			type: constants.LEFT_SIDEBAR_CLOSE
		}
	},
	openLeftSidebar() {
		return {
			type: constants.LEFT_SIDEBAR_OPEN
		}
	},
	toggleLeftSidebar(open) {
		return {
			type: constants.LEFT_SIDEBAR_TOGGLE,
			open
		}
	},
	dockLeftSidebar() {
		return {
			type: constants.LEFT_SIDEBAR_DOCK
		}
	},
	undockLeftSidebar(){
		return {
			type: constants.LEFT_SIDEBAR_UNDOCK
		}
	},
	setLeftSidebarWidth(width){
		return {
			type: constants.LEFT_SIDEBAR_SET_WIDTH,
			width
		}
	},
	setLeftSidebarDesktop(){
		return {
			type: constants.LEFT_SIDEBAR_SET_DESKTOP
		}
	},
	setLeftSidebarTablet(){
		return {
			type: constants.LEFT_SIDEBAR_SET_TABLET
		}
	},
	setLeftSidebarMobile(){
		return {
			type: constants.LEFT_SIDEBAR_SET_MOBILE
		}
	},
	setPageDesktop(){
		return {
			type: constants.PAGE_SET_DESKTOP
		}
	},
	setPageTablet(){
		return {
			type: constants.PAGE_SET_TABLET
		}
	},
	setPageMobile(){
		return {
			type: constants.PAGE_SET_MOBILE
		}
	},
	toggleRightSidebar(open) {
		dispatch({
			type: constants.RIGHT_SIDEBAR_TOGGLE,
			open
		})
	},
	leftTroughOpen(leftType, width){
		return {
			type: constants.LEFT_TROUGH_OPEN,
			leftType,
			width
		}
	},
	leftTroughClose(){
		return {
			type: constants.LEFT_TROUGH_CLOSE
		}
	},
	setLeftTroughType(leftType, width){
		return {
			type: constants.LEFT_TROUGH_SET_TYPE,
			leftType,
			width
		}
	},
	toggleLeftTrough(open) {
		dispatch({
			type: constants.LEFT_TROUGH_TOGGLE,
			open
		})
	},
	toggleRightTrough(open) {
		dispatch({
			type: constants.RIGHT_TROUGH_TOGGLE,
			open
		})
	},
	rightTroughOpen(rightType, width) {
		return {
			type: constants.RIGHT_TROUGH_OPEN,
			rightType,
			width
		}
	},
	setRightTroughType(rightType, width){
		return {
			type: constants.RIGHT_TROUGH_SET_TYPE,
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
			type: constants.RIGHT_TROUGH_CLOSE
		}
	}
}
function openLeft(leftType, width){
	return {
		type: constants.LEFT_TROUGH_OPEN,
		leftType, 
		width
	}
}

function openRight(rightType, width){
	return {
		type: constants.RIGHT_TROUGH_OPEN,
		rightType,
		width
	}
}

function stopFabTransition(){
		return {
			type: constants.FAB_STOP_TRANSITION
		};
};
function setFab(open){
	return {
		type: constants.FAB_TOGGLE,
		open
	}
}
function setUser(Roles, user){
	let links = setUserLinks(Roles, user);
	return {
		type: constants.SET_USER,
		user: user,
		links: links
	}
}

function setLoginError(reason){
	return {
		type: constants.SET_LOGIN_ERROR,
		reason
	}
}

function setUserLinks(Roles, user){
	let allLinks = [{name:'dashboard',primaryText:'Dashboard',icon: "/icons/dashboard.svg",href: '/dashboard'},
					{name:'clients',primaryText:'Clients',icon: "/icons/clients.svg",href: '/clients'},
					{name:'firms',primaryText:'Firms',icon: "/icons/firms.svg" ,href: '/firms'},
					{name:'matters',primaryText:'Matters',icon:"/icons/matters.svg",href:'/matters'},
					{name:'cases',primaryText:'Cases',icon: "/icons/cases.svg",href:'/cases'},
					{name:'discovery',primaryText:'Discovery',icon:"/icons/discovery.svg",href:'/discovery'}
	];
	let firmUserLinks = [
					{name:'dashboard',primaryText:'Dashboard',icon: "/icons/dashboard.svg",href: '/dashboard'},
					{name:'clients',primaryText:'Clients',icon: "/icons/clients.svg",href: '/clients'},
					{name:'matters',primaryText:'Matters',icon:"/icons/matters.svg",href:'/matters'}
	];
  	let clientUserLinks = [
  					{name:'dashboard',primaryText:'Dashboard',icon: "/icons/dashboard.svg",href: '/dashboard'},
  					{name:'firms',primaryText:'Firms',icon: "/icons/firms.svg" ,href: '/firms'},
  					{name:'matters',primaryText:'Matters',icon:"/icons/matters.svg",href:'/matters'}
  	];
  	let casesLink = [{name:'cases',primaryText:'Cases',icon: "/icons/cases.svg",href:'/cases'}];
  	let discoveryLink = [{name:'discovery',primaryText:'Discovery',icon:"/icons/discovery.svg",href:'/discovery'}];
  	if (Roles.userIsInRole(user._id, 'primary', Roles.GLOBAL_GROUPS)){
  		console.log('setting links for primary');
  		return allLinks;
  	} else if (Roles.userIsInRole(user._id, 'client', Roles.GLOBAL_GROUPS)){
  		console.log('setting links for client user');
		if (user.hasCases){
			let clientLinksWCases = clientUserLinks.concat(casesLink);
			if (user.hasDiscovery){
				results = clientLinksWCases.concat(discoveryLink);
				return results;
			} else {
				return clientLinksWCases;
			}
		}
		return clientUserLinks;
	} else if (Roles.userIsInRole(user._id, 'firm', Roles.GLOBAL_GROUPS)){
		console.log('setting links for firm user');
		if (user.hasCases){
			let firmLinksWCases = firmUserLinks.concat(casesLink);
			if (user.hasDiscovery){
				let results = firmLinksWCases.concat(discoveryLink);
				return results;
			}
			return firmLinksWCases;
		}
		return firmUserLinks;
	} else {
		return null;
	}
}