import * as constants from './../../../config/constants';

export default {
	page: (state = {}, action) => {
		switch(action.type){
			case constants.PAGE_SET_DESKTOP:
				return Object.assign({}, state, {
					pageOuterWidth: 'calc(100vw - 256px)'
				});
			case constants.PAGE_SET_TABLET:
				return Object.assign({}, state, {
					pageOuterWidth: 'calc(100vw - 70px)'
				});
			case constants.PAGE_SET_MOBILE:
				return Object.assign({}, state, {
					pageOuterWidth: 'calc(100vw)'
				});
			default:
				return state
		}
	}
}