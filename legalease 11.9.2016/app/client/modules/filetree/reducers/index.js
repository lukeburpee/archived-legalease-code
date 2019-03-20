import { 
	SET_ACTIVE_TREE_ITEMS,
	SET_EXPANDED_TREE_ITEMS,
	SET_ACTIVE_SEARCH,
	FILE_TREE_COLLAPSE
} from './../actions/types';

const filetreeDefault = {
	expandedListItems: [],
	activeListItem: null,
	searchTerm: ''
}

export default {
	filetree: (state = filetreeDefault, action) => {
		switch(action.type){
			case SET_ACTIVE_TREE_ITEMS:
				Object.assign({}, state, {
					activeListItem: action.index
				});
			case SET_EXPANDED_TREE_ITEMS:
				Object.assign({}, state, {
					expandedListItems: [
						...state.expandedListItems,
						action.index
					]
				});
			case SET_ACTIVE_SEARCH:
				Object.assign({}, state, {
					activeListItem: action.index
				});
			case FILE_TREE_COLLAPSE:
				Object.assign({}, state, {
					expandedListItems: []
				});
			default:
				return state;
		}
	}
};