import { 
	PAGE_SET_DESKTOP,
	PAGE_SET_TABLET,
	PAGE_SET_MOBILE
} from './../actions/types';

export default {
	page: (state = {}, action) => {
		switch(action.type){
			case PAGE_SET_DESKTOP:
				return Object.assign({}, state, {
					pageOuterWidth: 'calc(100vw - 256px)'
				});
			case PAGE_SET_TABLET:
				return Object.assign({}, state, {
					pageOuterWidth: 'calc(100vw - 70px)'
				});
			case PAGE_SET_MOBILE:
				return Object.assign({}, state, {
					pageOuterWidth: 'calc(100vw)'
				});
			default:
				return state
		}
	}
}