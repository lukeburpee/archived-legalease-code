import { 
	RIGHT_TROUGH_OPEN,
	RIGHT_TROUGH_CLOSE,
	RIGHT_TROUGH_TOGGLE,
	RIGHT_TROUGH_SET_WIDTH,
	RIGHT_TROUGH_SET_TYPE
} from './../actions/types';

const rtDefault = {
	rightTroughOpen: true,
	rightTroughVisibility: false,
	rightTroughType: null,
	rightTroughWidth: 0
}

export default {
	righttrough: (state = rtDefault, action) => {
		switch(action.type){
			case RIGHT_TROUGH_OPEN:
				return Object.assign({}, state, {
					rightTroughOpen: true, 
					rightTroughType:action.rightType,
					rightTroughWidth:action.width, 
					rightTroughVisibility: true
				});
			case RIGHT_TROUGH_CLOSE:
				return Object.assign({}, state, {
					rightTroughOpen: false, 
					rightTroughType: null, 
					rightTroughWidth:0, 
					rightTroughVisibility: false
				});
			case RIGHT_TROUGH_SET_TYPE:
				return Object.assign({}, state, {
					rightTroughType: action.rightType,
					rightTroughWidth: action.width,
					rightTroughVisibility: true
				});
			case RIGHT_TROUGH_SET_WIDTH:
				return Object.assign({}, state, {rightTroughWidth: action.width});
			default:
				return state;
		}
	}
}