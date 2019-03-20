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
} from './types'

export default {
	openUploadDialog(){
		type: UPLOAD_DIALOG_OPEN
	},
	addFile(file){
		type: UPLOAD_QUEUE_ADD_FILE,
		file
	},
	addMultiple(files){
		type: UPLOAD_QUEUE_ADD_MULTIPLE,
		files
	},
	removeFile(file){
		type: UPLOAD_QUEUE_REMOVE_FILE,
		file
	},
	removeSelected(selected){
		type: UPLOAD_QUEUE_REMOVE_SELECTED,
		selected
	},
	selectFileInQueue(file){
		type: UPLOAD_QUEUE_SELECT,
		file
	},
	startFile(file){
		type: UPLOAD_FILE_START,
		file
	},
	stopFile(file){
		type: UPLOAD_FILE_STOP,
		file
	},
	pauseFile(file){
		type: UPLOAD_FILE_PAUSE,
		file
	},
	startSelected(selected){
		type: UPLOAD_QUEUE_START_SELECTED,
		selected
	},
	startAll(){
		type: UPLOAD_QUEUE_START_ALL
	},
	stopAll(){
		type: UPLOAD_QUEUE_STOP_ALL
	},
	resumeAll(){
		type: UPLOAD_QUEUE_RESUME_ALL
	},
	pauseAll(){
		type: UPLOAD_QUEUE_PAUSE_ALL
	}
}