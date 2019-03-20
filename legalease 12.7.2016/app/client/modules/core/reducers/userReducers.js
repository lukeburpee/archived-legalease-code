import { 
	SET_LOGIN_EMAIL,
	SET_LOGIN_PASSWORD,
	SET_LOGIN_ERROR,
	SET_LOGIN_ERROR_CLOSE,
	CLEAR_LOGIN_ERROR,
	SET_USER,
	SET_USER_LINKS
} from './../actions/types';

const userDefault = {
	email:'',
	password: '',
	errorOpen: false,
	loginFails: 0,
	links: null,
	error: '',
	user:null
};

export default {
	user: (state = userDefault, action) => {
		switch(action.type){
			case SET_LOGIN_EMAIL:
				return Object.assign({}, state, {email:action.email});
			case SET_LOGIN_PASSWORD:
				return Object.assign({}, state, {password:action.password});
			case SET_LOGIN_ERROR:
				return Object.assign({}, state, {errorOpen: true, loginFails: state.loginFails+1, error:action.reason, email:'', password:''});
			case SET_LOGIN_ERROR_CLOSE:
				return Object.assign({}, state, {errorOpen:false});
			case SET_USER:
				return Object.assign({}, state, {user:action.user, password:'', email:'', errorOpen:false, loginFails:0, error:'', links:action.links});
			case SET_USER_LINKS:
				return Object.assign({}, state, {links:action.links});
			default:
				return state;
		}
	}
}