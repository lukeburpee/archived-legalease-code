import * as constants from './../../../config/constants';

export default {
	setMatter(selected){
		return {
			type: constants.SET_MATTER_SELECTED,
			selected
		}
	},
	setMatterList(list){
		return {
			type: constants.SET_MATTER_LIST
		}
	},
	clearMatter(){
		return {
			type: constants.CLEAR_SELECTED_MATTER
		}
	}
}