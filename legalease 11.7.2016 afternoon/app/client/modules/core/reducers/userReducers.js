import { 
	SET_USER
} from './../actions/types';

const userDefault = {
	user:false
};

export default {
	user: (state = userDefault, action) => {
		switch(action.type){
			case SET_USER:
				return Object.assign({}, state, {user:action.user});
			default:
				return state;
		}
	}
}