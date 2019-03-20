import * as constants from './../../../config/constants'

import _ from 'meteor/underscore';

const defaultState = {
	uploadPanelOpen: false,
	processingFormPanelOpen: true,
	extractionPanelOpen: false,
	conversionPanelOpen: false,
	analysisPanelOpen: false,
	exceptionPanelOpen: false,
	processingQueue: [],
	uploadQueueFileInfo: [],
	waiting: [],
	simultaneous: 5,
	uploadSelected: [],
	canceled: [],
	paused: [],
	resumed: [],
	uploading: [],
	processingSelected: [],
	custodian: '',
	collectionPrefix: '',
	matter: 'matter1',
	database: 'default',
	extractAllMeta: true,
	extractAllText: true,
	imageAllPDF: true,
	imageAllHTML: true,
	tokenizeText: true,
	translate: true,
	allowLSA: true,
	createCorpus: true,
	semanticAnalysis: true,
	collectPasswords: true,
	removeDuplicates: true
}

export default {
	processing: (state = defaultState, action) => {
		switch(action.type){
			case constants.PROCESSING_FORM_PANEL_TOGGLE:
				return Object.assign({}, state, { processingFormPanelOpen: !state.processingFormPanelOpen });
			case constants.UPLOAD_PANEL_TOGGLE:
				return Object.assign({}, state, { uploadPanelOpen: !state.uploadPanelOpen });
			case constants.UPLOAD_DIALOG_OPEN:
				return Object.assign({}, state, { uploadDialogOpen: true });
			case constants.UPLOAD_QUEUE_FILE_INFO:
				return Object.assign({}, state, { 
					uploadQueueFileInfo: [
						...state.uploadQueueFileInfo,
						action.file
					]
				});
			case constants.UPLOAD_QUEUE_ADD_FILE:
				return Object.assign({}, state, { 
					processingQueue: [
						...state.processingQueue,
						...action.file
					]});
			case constants.UPLOAD_QUEUE_ADD_MULTIPLE:
				return Object.assign({}, state, { 
					processingQueue: [
						...state.processingQueue,
						...action.files
					]});
			case constants.UPLOAD_QUEUE_REMOVE_FILE:
				return Object.assign({}, 
					state, 
					{
						uploadQueue: [
							...state.processingQueue.slice(0, action.index),
							...state.processingQueue.slice(action.index + 1,)
						]
				});
			case constants.UPLOAD_QUEUE_REMOVE_SELECTED:
				return Object.assign({}, 
					state, 
					{
						processingQueue: _.difference(state.processingQueue, state.processingSelected)
					});
			case constants.UPLOAD_QUEUE_REMOVE_ALL:
				return Object.assign({}, 
					state, 
					{
						processingQueue: []
				});
			case constants.UPLOAD_QUEUE_SELECT:
				return Object.assign({}, state, uploadSelected: action.processingSelected);
			case constants.UPLOAD_QUEUE_START_SELECTED:
				return Object.assign({}, 
					state,
					{
						uploading: [
							...state.selected.slice(0, state.simultaneous)
						],
						waiting: [
						...state.selected.slice(state.simultaneous + 1)
						]
					});
			case constants.UPLOAD_QUEUE_START_ALL:
				if (state.processingQueue.length > state.simultaneous) {
					return Object.assign({}, 
						state,
						{
							uploading: [
								...state.processingQueue.slice(0, state.simultaneous)
							],
							waiting: [
								...state.processingQueue.slice(state.simultaneous,)
							],
							processingFormPanelOpen: false,
							uploadPanelOpen: true
						}
					);
				} else {
					return Object.assign({}, 
						state,
						{
							uploading: state.processingQueue,
							processingFormPanelOpen: false,
							uploadPanelOpen: true
						}
					)
				}
			case constants.UPLOAD_QUEUE_MOVE_WAIT_TO_INPROGRESS:
				if (state.waiting){
					return Object.assign({}, state, {
						uploading: [
							...state.uploading.slice(0, action.index),
							...state.uploading.slice(action.index,),
							state.waiting[0]
						],
						waiting: [
							...state.waiting.slice(1,)
						]});
				} else {
					return Object.assign({}, state, {
						uploading: [
							...state.uploading.slice(0, action.index)
						]
					})
				}
			case constants.UPLOAD_QUEUE_CANCEL_SELECTED:
				return Object.assign({}, 
					state,
					{
						uploading: _.difference(state.uploading, state.uploadingSelected),
						canceled: state.uploadingSelected
				});
			case constants.UPLOAD_QUEUE_RESUME_SELECTED:
				return Object.assign({}, state, );
			case constants.UPLOAD_QUEUE_PAUSE_SELECTED: 
				return Object.assign({}, state, );
			case constants.UPLOAD_QUEUE_START_ALL:
				return Object.assign({}, state, );
			case constants.UPLOAD_QUEUE_PAUSE_ALL:
				return Object.assign({}, state, );
			case constants.UPLOAD_QUEUE_RESUME_ALL:
			case constants.UPLOAD_QUEUE_CANCEL_ALL:
			case constants.UPLOAD_FILE_START:
			case constants.UPLOAD_FILE_PAUSE:
			case constants.UPLOAD_FILE_CANCEL:
			case constants.UPLOAD_FILE_RESUME:
			case constants.UPLOAD_SET_MATTER:
				return Object.assign({}, state, { matter: action.matter });
			case constants.UPLOAD_SET_DATABASE:
				return Object.assign({}, state, { database: action.database });
			case constants.EXTRACT_ALL_META:
				return Object.assign({}, state, { extractAllMeta: !state.extractAllMeta });
			case constants.EXTRACT_ALL_TEXT:
				return Object.assign({}, state, { extractAllText: !state.extractAllText });
			case constants.IMAGE_ALL_PDF:
				return Object.assign({}, state, { imageAllPDF: !state.imageAllPDF });
			case constants.IMAGE_ALL_HTML:
				return Object.assign({}, state, { imageAllHTML: !state.imageAllHTML });
			case constants.ANALYSIS_TOKENIZE_TEXT:
				return Object.assign({}, state, { tokenizeText: !state.tokenizeText });
			case constants.ANALYSIS_TRANSLATE:
				return Object.assign({}, state, { translate: !state.translate });
			case constants.ANALYSIS_ALLOW_LSA:
				return Object.assign({}, state, { allowLSA: !state.allowLSA });
			case constants.ANALYSIS_CREATE_CORPUS:
				return Object.assign({}, state, { createCorpus: !state.createCorpus });
			case constants.ANALYSIS_SEMANTIC_ANALYSIS:
				return Object.assign({}, state, { semanticAnalysis: !state.semanticAnalysis });
			default:
				return state;
		}
	}
}