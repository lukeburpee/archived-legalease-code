import * as constants from './../../../config/constants';

export default {
	setDataTableScrolling(){
		return { 
			type: constants.SET_DATATABLE_SCROLLING
		};
	},
	setDataTableScrollingFinished(){
		return {
			type: constants.FINISH_DATATABLE_SCROLLING
		}
	}
}