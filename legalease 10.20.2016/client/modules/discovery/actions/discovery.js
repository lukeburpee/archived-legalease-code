import { 
	DISCOVERY_SET_ACTIVE_PANEL,
	DISCOVERY_SET_DOCUMENT_LIST,
	DISCOVERY_SET_NUMBER_OF_DOCUMENTS,
	DISCOVERY_SET_CURRENT_DOCUMENT,
	DISCOVERY_PREVIOUS_DOCUMENT,
	DISCOVERY_NEXT_DOCUMENT,
	DISCOVERY_FIRST_DOCUMENT,
	DISCOVERY_LAST_DOCUMENT
} from './types';

export default {
	setDiscoveryPanel(panel) {
		return { 
			type: DISCOVERY_SET_ACTIVE_PANEL,
			panel
		};
	},
	setDiscoveryDocumentList(list) {
		return {
			type: DISCOVERY_SET_DOCUMENT_LIST,
			list
		}
	},
	setCurrentDocument(input, list) {
		return {
			type: DISCOVERY_SET_CURRENT_DOCUMENT,
			input,
			list
		}
	},
	nextDocument(current, list) {
		return {
			type: DISCOVERY_NEXT_DOCUMENT,
			current,
			list
		}
	},
	previousDocument(current, list) {
		return {
			type: DISCOVERY_PREVIOUS_DOCUMENT,
			current,
			list
		}
	},
	firstDocument(list){
		return {
			type: DISCOVERY_FIRST_DOCUMENT,
			list
		}
	},
	lastDocument(current, list){
		return {
			type: DISCOVERY_LAST_DOCUMENT,
			current,
			list
		}
	}
}