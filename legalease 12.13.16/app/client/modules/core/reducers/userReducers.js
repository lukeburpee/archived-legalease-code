import * as constants from './../../../config/constants';

const userDefault = {
	email:'',
	password: '',
	errorOpen: false,
	loginFails: 0,
	links: null,
	error: '',
	user: {
		matters: []
	}
};

export default {
	user: (state = userDefault, action) => {
		switch(action.type){
			case constants.SET_LOGIN_EMAIL:
				return Object.assign({}, state, {email:action.email});
			case constants.SET_LOGIN_PASSWORD:
				return Object.assign({}, state, {password:action.password});
			case constants.SET_LOGIN_ERROR:
				return Object.assign({}, state, {errorOpen: true, loginFails: state.loginFails+1, error:action.reason, email:'', password:''});
			case constants.SET_LOGIN_ERROR_CLOSE:
				return Object.assign({}, state, {errorOpen:false});
			case constants.SET_USER:
				return Object.assign({}, state, {user:action.user, password:'', email:'', errorOpen:false, loginFails:0, error:'', links:action.links});
			case constants.SET_USER_LINKS:
				return Object.assign({}, state, {links:action.links});
			case constants.REMOVE_USER:
				return Object.assign({}, state, {user: null});
			default:
				return state;
		}
	}
}