import { Job } from 'meteor/vsivsi:job-collection';
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
	UPLOAD_QUEUE_PAUSE_ALL,
	UPLOAD_QUEUE_RESUME_ALL, 
	UPLOAD_QUEUE_CANCEL_ALL,
	UPLOAD_FILE_START,
	UPLOAD_FILE_PAUSE,
	UPLOAD_FILE_CANCEL, 
	UPLOAD_FILE_RESUME,
	UPLOAD_SET_MATTER,
	UPLOAD_SET_CUSTODIAN,
	UPLOAD_SET_PREFIX,
	UPLOAD_SET_DATABASE,
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
	moveWaitToInProgress(index){
		return {
			type: UPLOAD_QUEUE_MOVE_WAIT_TO_INPROGRESS,
			index
		}
	},
	removeSelected(selected){
		return {
			type: UPLOAD_QUEUE_REMOVE_SELECTED,
			selected
		}
	},
	handleFileInfo(file){
		return {
			type: UPLOAD_QUEUE_FILE_INFO,
			file
		}
	},
	selectFileInQueue(file){
		return {
			type: UPLOAD_QUEUE_SELECT,
			file
		}
	},
	addFileToTextExtractionQueue(jobCollection, file){
		console.log('adding file ' + file._id + ' to extractText job queue');
		const Job = new Job(jobCollection, 'extractText', 
			{_id:file._id, name: file.name, type:file.type, database: file.meta.database});
		Job.priority('normal')
		Job.retry({retries:50, wait:60*1000})
		Job.save();
		console.log('added file ' + file._id + ' to extractText job queue');
	},
	addFileToMetaExtractionQueue(jobCollection, file){
		console.log('adding file ' + file._id + ' to extractMeta queue');
		const Job2 = new Job(jobCollection, 'extractMeta',
			{_id:file._id, name: file.name, type:file.type, database: file.meta.database});
		Job2.priority('normal')
		Job2.retry({retries:50, wait:60*1000})
		Job2.save();
		console.log('added file ' + file._id + ' to extractMeta queue');
	},
	addFileToHtmlConversionQueue(jobCollection, file){
		console.log('adding file ' + file._id + ' to imageHTML queue');
		const Job3 = new Job(jobCollection, 'convertHtml', 
			{_id:file._id, name: file.name, type:file.type, database: file.meta.database});
		Job3.priority('normal')
		Job3.retry({retries:50, wait:60*1000})
		Job3.save();
		console.log('added file ' + file._id + ' to imageHTML job queue');
	},
	addFileToPdfConversionQueue(jobCollection, file){
		console.log('adding file ' + file._id + ' to imagePDF queue');
		const Job4 = new Job(jobCollection, 'convertPdf',
			{_id:file._id, name: file.name, type:file.type, database: file.meta.database});
		Job4.priority('normal')
		Job4.retry({retries:50, wait:60*1000})
		Job4.save();
		console.log('added file ' + file._id + ' to imagePDF job queue');
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
	},
	setMatter(matter){
		return {
			type: UPLOAD_SET_MATTER,
			matter
		}
	},
	setDatabase(database){
		return {
			type: UPLOAD_SET_DATABASE,
			database
		}
	}
}