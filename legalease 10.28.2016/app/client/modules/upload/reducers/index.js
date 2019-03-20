import {
	UPLOAD_DIALOG_OPEN,
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
	UPLOAD_QUEUE_PAUSE_ALL,
	UPLOAD_QUEUE_RESUME_ALL, 
	UPLOAD_QUEUE_CANCEL_ALL,
	UPLOAD_FILE_START,
	UPLOAD_FILE_PAUSE,
	UPLOAD_FILE_CANCEL, 
	UPLOAD_FILE_RESUME, 
} from './actions/types'

import _ from 'meteor/underscore';

const defaultState = {
	uploadDialogOpen: false,
	uploadQueue: [],
	waiting: [],
	simultaneous: 5
	uploadSelected: [],
	canceled: [],
	paused: [],
	resumed: [],
	uploading: [],
	uploadingSelected: []
}

export default {
	upload: (state = defaultState, action) => {
		switch(action.type){
			case UPLOAD_DIALOG_OPEN:
				return Object.assign({}, state, uploadDialogOpen: true );
			case UPLOAD_QUEUE_ADD_FILE:
				return Object.assign({}, state, uploadQueue.concat(action.file));
			case UPLOAD_QUEUE_ADD_MULTIPLE:
				return Object.assign({}, state, uploadQueue.concat(action.files));

			case UPLOAD_QUEUE_REMOVE_FILE:
				return Object.assign({}, 
					state, 
					uploadQueue: [
					...state.items.slice(0, action.file),
					...state.items.slice(action.file + 1)
					]
				);
			case UPLOAD_QUEUE_REMOVE_SELECTED:
				return Object.assign({}, 
					state, 
					uploadQueue: _.difference(state.uploadQueue, state.uploadSelected)
				);
			case UPLOAD_QUEUE_REMOVE_ALL:
				return Object.assign({}, 
					state, 
					uploadQueue: []
				);
			case UPLOAD_QUEUE_SELECT:
				return Object.assign({}, state, uploadSelected: action.uploadSelected);
			case UPLOAD_QUEUE_START_SELECTED:
				return Object.assign({}, 
					state,
					uploading: [
					...state.selected.slice(0, state.simultaneous)
					],
					waiting: [
					...state.selected.slice(state.simultaneous + 1)
					]
				);
			case UPLOAD_QUEUE_CANCEL_SELECTED:
				return Object.assign({}, 
					state,
					uploading: _.difference(state.uploading, state.uploadingSelected),
					canceled: state.uploadingSelected
				);
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
			default:
				return state;
		}
	}
}