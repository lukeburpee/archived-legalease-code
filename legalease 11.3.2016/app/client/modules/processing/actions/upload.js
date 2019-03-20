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
	UPLOAD_SET_CUSTODIAN,
	UPLOAD_SET_PREFIX,
	EXTRACT_ALL_META,
	EXTRACT_ALL_TEXT,
	EXTRACT_SELECTED_META,
	EXTRACT_SELECTED_TEXT,
	IMAGE_ALL_PDF,
	IMAGE_ALL_HTML,
	IMAGE_SELECTED_PDF,
	IMAGE_SELECTED_HTML, 
	EXCEPTION_COLLECT_PASSWORD,
	EXCEPTION_DEDUPE,
	EXCEPTION_IMAGE_LARGE_FILE,

} from './types'



export default {
	openUploadDialog(){
		return {
			type: UPLOAD_DIALOG_OPEN
		}
	},
	addFile(file){
		return {
			type: UPLOAD_QUEUE_ADD_FILE,
			file
		}
	},
	addMultiple(files){
		return {
			type: UPLOAD_QUEUE_ADD_MULTIPLE,
			files
		}
	},
	removeFile(index){
		return {
			type: UPLOAD_QUEUE_REMOVE_FILE,
			index
		}
	},
	removeSelected(selected){
		return {
			type: UPLOAD_QUEUE_REMOVE_SELECTED,
			selected
		}
	},
	selectFileInQueue(file){
		return {
			type: UPLOAD_QUEUE_SELECT,
			file
		}
	},
	startFile(file){
		return {
			type: UPLOAD_FILE_START,
			file
		}
	},
	stopFile(file){
		return {
			type: UPLOAD_FILE_STOP,
			file
		}
	},
	pauseFile(file){
		return {
			type: UPLOAD_FILE_PAUSE,
			file
		}
	},
	startSelected(selected){
		return {
			type: UPLOAD_QUEUE_START_SELECTED,
			selected
		}
	},
	startAll(){
		return {
			type: UPLOAD_QUEUE_START_ALL
		}
	},
	stopAll(){
		return {
			type: UPLOAD_QUEUE_STOP_ALL
		}
	},
	resumeAll(){
		return {
			type: UPLOAD_QUEUE_RESUME_ALL
		}
	},
	pauseAll(){
		return {
			type: UPLOAD_QUEUE_PAUSE_ALL
		}
	},
	extractAllMeta(){
		return {
			type: EXTRACT_ALL_META
		}
	},
	extractAllText(){
		return {
			type: EXTRACT_ALL_TEXT
		}
	},
	imageAllPdf(){
		return {
			type: IMAGE_ALL_PDF
		}
	},
	imageAllHtml(){
		return {
			type: IMAGE_ALL_HTML
		}
	}
}