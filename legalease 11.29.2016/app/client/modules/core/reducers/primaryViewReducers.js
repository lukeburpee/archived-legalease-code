import { 
	RIGHT_TROUGH_SET_WIDTH,
	PRIMARY_SET_WIDTH,
	PRIMARY_SET_LOCATION
} from './../actions/types';
const primaryDefault = {
	primaryWidth:400
};

export default {
	primary: (state = primaryDefault, action) => {
		switch(action.type){
			case PRIMARY_SET_WIDTH:
				return Object.assign({}, state, {primaryWidth: action.width});
			case PRIMARY_SET_LOCATION:
				return Object.assign({}, state, {primaryLocation: action.location});
			default:
				return state;
		}
	}
}