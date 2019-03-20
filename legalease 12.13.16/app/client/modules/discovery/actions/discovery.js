import * as constants from './../../../config/constants';

export default {
	setDiscoveryPanel(panel) {
		return { 
			type: constants.DISCOVERY_SET_ACTIVE_PANEL,
			panel
		};
	},
	setDiscoveryDocumentList(list) {
		return {
			type: constants.DISCOVERY_SET_DOCUMENT_LIST,
			list
		}
	},
	setCurrentDocument(input, list) {
		return {
			type: constants.DISCOVERY_SET_CURRENT_DOCUMENT,
			input,
			list
		}
	},
	nextDocument(current, list) {
		return {
			type: constants.DISCOVERY_NEXT_DOCUMENT,
			current,
			list
		}
	},
	previousDocument(current, list) {
		return {
			type: constants.DISCOVERY_PREVIOUS_DOCUMENT,
			current,
			list
		}
	},
	firstDocument(list){
		return {
			type: constants.DISCOVERY_FIRST_DOCUMENT,
			list
		}
	},
	lastDocument(current, list){
		return {
			type: constants.DISCOVERY_LAST_DOCUMENT,
			current,
			list
		}
	},
	setDiscoveryBatchList(list){
		return {
			type: constants.DISCOVERY_SET_BATCH_LIST,
			list
		}
	},
	setDiscoveryFormList(list){
		return {
			type: constants.DISCOVERY_SET_FORM_LIST,
			list
		}
	}
}