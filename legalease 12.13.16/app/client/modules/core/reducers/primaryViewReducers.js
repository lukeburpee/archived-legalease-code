import * as constants from './../../../config/constants';


export default {
	primary: (state = {}, action) => {
		switch(action.type){
			case constants.PRIMARY_SET_WIDTH:
				return Object.assign({}, state, {primaryWidth: action.width});
			case constants.PRIMARY_SET_LOCATION:
				return Object.assign({}, state, {primaryLocation: action.location});
			default:
				return state;
		}
	}
}