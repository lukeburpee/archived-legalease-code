import {
	SET_ACTIVE_TREE_ITEMS,
	SET_EXPANDED_TREE_ITEMS,
	SET_ACTIVE_SEARCH
} from './types';

export default {
	setActiveTreeItems(items) {
		return {
			type: SET_ACTIVE_TREE_ITEMS,
			items
		}
	},
	setExpandedTreeItems(items) {
		return {
			type: SET_EXPANDED_TREE_ITEMS,
			items
		}
	},
	setActiveSearch(search) {
		return {
			type: SET_ACTIVE_SEARCH,
			search
		}
	},
	collapseFileTree(){
		return {
			type: FILE_TREE_COLLAPSE
		}
	}
}