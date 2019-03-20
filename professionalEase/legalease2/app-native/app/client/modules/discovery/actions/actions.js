import { SET_SEARCH } from './types';

export default {
	setSearch(search){
		return {
			type: SET_SEARCH,
			search
		}
	}
}