import * as constants from './../../../config/constants';

export default {
	setActiveTreeItem(index) {
		return {
			type: constants.SET_ACTIVE_TREE_ITEM,
			index
		}
	},
	addExpandedTreeItem(item) {
		return {
			type: constants.ADD_EXPANDED_TREE_ITEM,
			item
		}
	},
	removeExpandedTreeItem(item){
		return {
			type: constants.REMOVE_EXPANDED_TREE_ITEM,
			item
		}
	},
	collapseFileTree(){
		return {
			type: constants.FILE_TREE_COLLAPSE
		}
	},
	setTree(active, expanded){
		return {
			type: constants.SET_TREE
		}
	},
	openFileTreeContext(anchor, listItem){
		return {
			type: constants.OPEN_FILE_TREE_CONTEXT,
			anchor,
			listItem
		}
	},
	closeFileTreeContext(){
		return {
			type: constants.CLOSE_FILE_TREE_CONTEXT
		}
	}
}