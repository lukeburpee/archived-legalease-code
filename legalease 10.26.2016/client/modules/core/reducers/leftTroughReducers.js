import { 
	LEFT_TROUGH_OPEN,
	LEFT_TROUGH_CLOSE,
	LEFT_TROUGH_SET_TYPE,
	LEFT_TROUGH_SET_WIDTH
} from './../actions/types';

const ltDefault = {
	leftTroughOpen:false,
	leftTroughVisibility: false,
	leftTroughType: null,
	leftTroughWidth:0,
}

export default {
	lefttrough: (state = ltDefault, action) => {
		switch(action.type){
			case LEFT_TROUGH_OPEN:
				return Object.assign({}, state, {
					leftTroughOpen: true,
					leftTroughType:action.leftType, 
					leftTroughWidth:action.width, 
					leftTroughVisibility:true});
			case LEFT_TROUGH_CLOSE:
				return Object.assign({}, state, {
					leftTroughOpen: false, 
					leftTroughType:null,
					leftTroughWidth:0, 
					leftTroughHidden:false
				});
			case LEFT_TROUGH_SET_WIDTH:
				return Object.assign({}, state, {leftTroughWidth: action.width});
			case LEFT_TROUGH_SET_TYPE:
				return Object.assign({}, state, {leftTroughType: action.leftType, leftTroughWidth: action.width});
			default:
				return state;

		}
	}
}