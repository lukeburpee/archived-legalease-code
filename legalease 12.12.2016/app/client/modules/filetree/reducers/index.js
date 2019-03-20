import * as constants from './../../../config/constants';

const filetreeDefault = {
	expandedSearchItems: [],
	activeSearchItem: null,
	contextOpen: false
}

export default {
	filetree: (state = filetreeDefault, action) => {
		switch(action.type){
			case constants.SET_ACTIVE_TREE_ITEM:
				return Object.assign({}, state, {
					activeSearchItem: action.index
				});
			case constants.ADD_EXPANDED_TREE_ITEM:
				return Object.assign({}, state, {
					expandedSearchItems: [
						...state.expandedSearchItems,
						action.item
					]
				});
			case constants.REMOVE_EXPANDED_TREE_ITEM:
				let index = state.expandedSearchItems.indexOf(action.item);
				return Object.assign({}, state, {
					expandedSearchItems: [
						...state.expandedSearchItems.slice(0, index),
						...state.expandedSearchItems.slice(index+1,)
					]
				});
			case constants.FILE_TREE_COLLAPSE:
				return Object.assign({}, state, {
					expandedSearchItems: []
				});
			case constants.SET_TREE:
				return Object.assign({}, state, {
					expandedSearchItems: action.expanded,
					activeSearchItem: action.active
				});
			case constants.OPEN_FILE_TREE_CONTEXT:
				return Object.assign({}, state, {
					contextOpen: true,
					contextAnchor: action.anchor
				});
			case constants.CLOSE_FILE_TREE_CONTEXT:
				return Object.assign({}, state, {
					contextAnchor: null,
					contextOpen: false
				});
			default:
				return state;
		}
	}
};