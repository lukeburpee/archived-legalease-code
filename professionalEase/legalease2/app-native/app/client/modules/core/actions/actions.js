import { LOGIN, LOGOUT, REGISTER_ROUTES, OPEN_NAV, CLOSE_NAV } from './types';

export function openNav(){
	return dispatch => {
		dispatch({
			type: OPEN_NAV
		});
	}
}

export function closeNav(){
	return dispatch({
		type: CLOSE_NAV
	});
}

export function login(user){
	return dispatch({
		type: LOGIN,
		user
	});
}

export function logout(){
	return dispatch({
		type: LOGOUT
	});
}

export function registerRoutes(routes){
	return dispatch({
		type: REGISTER_ROUTES,
		routes
	});
}