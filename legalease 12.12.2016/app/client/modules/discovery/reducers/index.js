import * as constants from './../../../config/constants';

const discoveryDefault = {
	activePanel: 0,
	activeMatter: 0,
	matterList: [{
		name: 'Matter1'
	}],
	selectedDocuments: [],
	currentDocumentNumber: 0,
	documentNumberDisplay: 1,
	currentViewer: 'pdfviewer',
	currentTextDocument: '',
	currentHtmlDocument: '',
	currentPdfDocument: "/testfiles/alabama-durable-health-care-power-of-attorney-form.pdf",
	documentPdfLinks: [
		"/testfiles/alabama-durable-health-care-power-of-attorney-form.pdf",
		"/testfiles/ao136.pdf",
		"/testfiles/ao153_0.pdf",
		"/testfiles/alabama-durable-health-care-power-of-attorney-form.pdf",
		"/testfiles/ao136.pdf",
		"/testfiles/ao153_0.pdf",
		"/testfiles/alabama-durable-health-care-power-of-attorney-form.pdf",
		"/testfiles/ao136.pdf",
		"/testfiles/ao153_0.pdf"
	],
	documentTextLinks: [],
	documentHtmlLinks: [],
	totalDocumentNumber: 9
}

let nextDocNumber;
let nextDoc;

export default {
	discovery: (state = discoveryDefault, action) => {
		switch(action.type){
			case constants.DISCOVERY_SET_ACTIVE_PANEL:
				return Object.assign({}, state, { activePanel:action.panel });
			case constants.DISCOVERY_SET_DOCUMENT_LIST:
				return Object.assign({}, state, { documentPdfLinks:action.documentList, totalDocumentNumber: action.documentList.length });
			case constants.DISCOVERY_SET_CURRENT_DOCUMENT:
				nextDoc = action.list[nextDocNumber]
				return Object.assign({}, state, { currentPdfDocument: action.list[action.input], currentDocumentNumber: action.input, documentNumberDisplay: action.input + 1  });
			case constants.DISCOVERY_SET_CURRENT_DOCUMENT_NUMBER:
				return Object.assign({}, state, { currentDocumentNumber: action.currentDocumentNumber });
			case constants.DISCOVERY_SET_SELECTED_DOCUMENTS:
				return Object.assign({}, state, { selectedDocuments: action.selectedDocuments });
			case constants.DISCOVERY_NEXT_DOCUMENT:
				nextDocNumber = action.current + 1;
				nextDoc = action.list[nextDocNumber]
				return Object.assign({}, state, { currentDocumentNumber: nextDocNumber, currentPdfDocument: nextDoc });
			case constants.DISCOVERY_PREVIOUS_DOCUMENT:
				nextDocNumber = action.current - 1;
				nextDoc = action.list[nextDocNumber]
				return Object.assign({}, state, { currentDocumentNumber: nextDocNumber, currentPdfDocument: nextDoc });
			case constants.DISCOVERY_FIRST_DOCUMENT:
				nextDoc = action.list[0];
				return Object.assign({}, state, { currentDocumentNumber: 0, currentPdfDocument: nextDoc });
			case constants.DISCOVERY_LAST_DOCUMENT:
				nextDocNumber = action.list.length - 1;
				nextDoc = action.list[nextDocNumber];
				return Object.assign({}, state, { currentDocumentNumber: nextDocNumber, currentPdfDocument: nextDoc });
			default:
				return state;
		}
	}
};