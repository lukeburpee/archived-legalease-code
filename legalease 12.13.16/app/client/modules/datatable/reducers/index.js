import * as constants from './../../../config/constants';

const datatableDefault = {
	scrolling: false
}

export default {
	datatable: (state = datatableDefault, action) => {
		switch(action.type){
			case constants.SET_DATATABLE_SCROLLING:
				return Object.assign({}, state, {scrolling:true});
			case constants.FINISH_DATATABLE_SCROLLING:
				return Object.assign({}, state, {scrolling:false});
			default:
				return state;
		}
	}
};