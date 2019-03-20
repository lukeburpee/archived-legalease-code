import {
	UPLOAD_DIALOG_OPEN,
	UPLOAD_QUEUE_MOVE_WAIT_TO_INPROGRESS,
	UPLOAD_QUEUE_FILE_INFO,
	UPLOAD_QUEUE_ADD_FILE,
	UPLOAD_QUEUE_ADD_MULTIPLE, 
	UPLOAD_QUEUE_REMOVE_FILE,
	UPLOAD_QUEUE_SELECT,
	UPLOAD_QUEUE_REMOVE_SELECTED, 
	UPLOAD_QUEUE_START_SELECTED,
	UPLOAD_QUEUE_CANCEL_SELECTED, 
	UPLOAD_QUEUE_RESUME_SELECTED,
	UPLOAD_QUEUE_PAUSE_SELECTED, 
	UPLOAD_QUEUE_REMOVE_ALL, 
	UPLOAD_QUEUE_START_ALL,
	UPLOAD_QUEUE_START_ALL_W_WAIT,
	UPLOAD_QUEUE_START_ALL_W_OUT_WAIT,
	UPLOAD_QUEUE_PAUSE_ALL,
	UPLOAD_QUEUE_RESUME_ALL, 
	UPLOAD_QUEUE_CANCEL_ALL,
	UPLOAD_SET_MATTER,
	UPLOAD_SET_DATABASE,
	UPLOAD_FILE_START,
	UPLOAD_FILE_PAUSE,
	UPLOAD_FILE_CANCEL, 
	UPLOAD_FILE_RESUME, 
	EXTRACT_ALL_TEXT,
	EXTRACT_ALL_META,
	EXTRACT_SELECTED_TEXT,
	EXTRACT_SELECTED_META,
	IMAGE_ALL_PDF,
	IMAGE_ALL_HTML,
	IMAGE_SELECTED_PDF,
	IMAGE_SELECTED_HTML,
	EXCEPTION_FIND_PASSWORD,
	EXCEPTION_DEDUPE,
	ANALYSIS_TOKENIZE_TEXT,
	ANALYSIS_TRANSLATE,
	ANALYSIS_ALLOW_LSA,
	ANALYSIS_CREATE_CORPUS,
	ANALYSIS_SEMANTIC_ANALYSIS
} from './../actions/types'

import _ from 'meteor/underscore';

const defaultState = {
	uploadDialogOpen: false,
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
			case UPLOAD_DIALOG_OPEN:
				return Object.assign({}, state, { uploadDialogOpen: true });
			case UPLOAD_QUEUE_FILE_INFO:
				return Object.assign({}, state, { 
					uploadQueueFileInfo: [
						...state.uploadQueueFileInfo,
						action.file
					]
				});
			case UPLOAD_QUEUE_ADD_FILE:
				return Object.assign({}, state, { 
					processingQueue: [
						...state.processingQueue,
						...action.file
					]});
			case UPLOAD_QUEUE_ADD_MULTIPLE:
				return Object.assign({}, state, { 
					processingQueue: [
						...state.processingQueue,
						...action.files
					]});
			case UPLOAD_QUEUE_REMOVE_FILE:
				return Object.assign({}, 
					state, 
					{
						uploadQueue: [
							...state.processingQueue.slice(0, action.index),
							...state.processingQueue.slice(action.index + 1,)
						]
				});
			case UPLOAD_QUEUE_REMOVE_SELECTED:
				return Object.assign({}, 
					state, 
					{
						processingQueue: _.difference(state.processingQueue, state.processingSelected)
					});
			case UPLOAD_QUEUE_REMOVE_ALL:
				return Object.assign({}, 
					state, 
					{
						processingQueue: []
				});
			case UPLOAD_QUEUE_SELECT:
				return Object.assign({}, state, uploadSelected: action.processingSelected);
			case UPLOAD_QUEUE_START_SELECTED:
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
			case UPLOAD_QUEUE_START_ALL:
				if (state.processingQueue.length > state.simultaneous) {
					return Object.assign({}, 
						state,
						{
							uploading: [
								...state.processingQueue.slice(0, state.simultaneous)
							],
							waiting: [
								...state.processingQueue.slice(state.simultaneous,)
							]
						}
					);
				} else {
					return Object.assign({}, 
						state,
						{
							uploading: state.processingQueue
						}
					)
				}
			case UPLOAD_QUEUE_MOVE_WAIT_TO_INPROGRESS:
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
			case UPLOAD_QUEUE_CANCEL_SELECTED:
				return Object.assign({}, 
					state,
					{
						uploading: _.difference(state.uploading, state.uploadingSelected),
						canceled: state.uploadingSelected
				});
			case UPLOAD_QUEUE_RESUME_SELECTED:
				return Object.assign({}, state, );
			case UPLOAD_QUEUE_PAUSE_SELECTED: 
				return Object.assign({}, state, );
			case UPLOAD_QUEUE_START_ALL:
				return Object.assign({}, state, );
			case UPLOAD_QUEUE_PAUSE_ALL:
				return Object.assign({}, state, );
			case UPLOAD_QUEUE_RESUME_ALL:
			case UPLOAD_QUEUE_CANCEL_ALL:
			case UPLOAD_FILE_START:
			case UPLOAD_FILE_PAUSE:
			case UPLOAD_FILE_CANCEL:
			case UPLOAD_FILE_RESUME:
			case UPLOAD_SET_MATTER:
				return Object.assign({}, state, { matter: action.matter });
			case UPLOAD_SET_DATABASE:
				return Object.assign({}, state, { database: action.database });
			case EXTRACT_ALL_META:
				return Object.assign({}, state, { extractAllMeta: !state.extractAllMeta });
			case EXTRACT_ALL_TEXT:
				return Object.assign({}, state, { extractAllText: !state.extractAllText });
			case IMAGE_ALL_PDF:
				return Object.assign({}, state, { imageAllPDF: !state.imageAllPDF });
			case IMAGE_ALL_HTML:
				return Object.assign({}, state, { imageAllHTML: !state.imageAllHTML });
			case ANALYSIS_TOKENIZE_TEXT:
				return Object.assign({}, state, { tokenizeText: !state.tokenizeText });
			case ANALYSIS_TRANSLATE:
				return Object.assign({}, state, { translate: !state.translate });
			case ANALYSIS_ALLOW_LSA:
				return Object.assign({}, state, { allowLSA: !state.allowLSA });
			case ANALYSIS_CREATE_CORPUS:
				return Object.assign({}, state, { createCorpus: !state.createCorpus });
			case ANALYSIS_SEMANTIC_ANALYSIS:
				return Object.assign({}, state, { semanticAnalysis: !state.semanticAnalysis });
			default:
				return state;
		}
	}
}