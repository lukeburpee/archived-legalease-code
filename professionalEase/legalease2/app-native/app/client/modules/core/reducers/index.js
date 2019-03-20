import { ActionConst } from 'react-native-router-flux';
import { LOGIN, LOGOUT, REGISTER_ROUTES } from './../actions/types';

const defaultState = {
	user: null,
	routes: [],
	scene: {}
};

const defaultPage = "login"

export default {
	core: (state = defaultState, action) => {
		switch(action.type){
			case LOGIN:
				return Object.assign({}, state, {
					user: action.user
				});
			case LOGOUT:
				return Object.assign({}, state, {
					user: null
				});
			case REGISTER_ROUTES:
				return Object.assign({}, state, {
					routes: action.routes
				});
			case ActionConst.FOCUS:
				return {
					...state,
					scene: action.scene
				}
			default:
				return state;
		}
	}
}

