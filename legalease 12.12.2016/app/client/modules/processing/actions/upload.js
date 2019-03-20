import * as constants from './../../../config/constants'

export default {
	openUploadPanel(){
		return {
			type: constants.UPLOAD_PANEL_OPEN
		}
	},
	toggleUploadPanel(){
		return {
			type: constants.UPLOAD_PANEL_TOGGLE
		}
	},
	toggleProcessingFormPanel(){
		return {
			type: constants.PROCESSING_FORM_PANEL_TOGGLE
		}
	},
	openProcessingFormPanel(){
		return {
			type: constants.PROCESSING_FORM_PANEL_OPEN
		}
	},
	openExtractionPanel(){
		return {
			type: constants.EXTRACTION_PANEL_OPEN
		}
	},
	openConversionPanel(){
		return {
			type: constants.CONVERSION_PANEL_OPEN
		}
	},
	openExceptionPanel(){
		return {
			type: constants.EXCEPTION_PANEL_OPEN
		}
	},
	addFile(file){
		return {
			type: constants.UPLOAD_QUEUE_ADD_FILE,
			file
		}
	},
	addMultiple(files){
		return {
			type: constants.UPLOAD_QUEUE_ADD_MULTIPLE,
			files
		}
	},
	removeFile(index){
		return {
			type: constants.UPLOAD_QUEUE_REMOVE_FILE,
			index
		}
	},
	moveWaitToInProgress(index){
		return {
			type: constants.UPLOAD_QUEUE_MOVE_WAIT_TO_INPROGRESS,
			index
		}
	},
	removeSelected(selected){
		return {
			type: constants.UPLOAD_QUEUE_REMOVE_SELECTED,
			selected
		}
	},
	handleFileInfo(file){
		return {
			type: constants.UPLOAD_QUEUE_FILE_INFO,
			file
		}
	},
	selectFileInQueue(file){
		return {
			type: constants.UPLOAD_QUEUE_SELECT,
			file
		}
	},
	startFile(file){
		return {
			type: constants.UPLOAD_FILE_START,
			file
		}
	},
	stopFile(file){
		return {
			type: constants.UPLOAD_FILE_STOP,
			file
		}
	},
	pauseFile(file){
		return {
			type: constants.UPLOAD_FILE_PAUSE,
			file
		}
	},
	startSelected(selected){
		return {
			type: constants.UPLOAD_QUEUE_START_SELECTED,
			selected
		}
	},
	startAll(){
		return {
			type: constants.UPLOAD_QUEUE_START_ALL
		}
	},
	stopAll(){
		return {
			type: constants.UPLOAD_QUEUE_STOP_ALL
		}
	},
	resumeAll(){
		return {
			type: constants.UPLOAD_QUEUE_RESUME_ALL
		}
	},
	pauseAll(){
		return {
			type: constants.UPLOAD_QUEUE_PAUSE_ALL
		}
	},
	extractAllMeta(){
		return {
			type: constants.EXTRACT_ALL_META
		}
	},
	extractAllText(){
		return {
			type: constants.EXTRACT_ALL_TEXT
		}
	},
	imageAllPdf(){
		return {
			type: constants.IMAGE_ALL_PDF
		}
	},
	imageAllHtml(){
		return {
			type: constants.IMAGE_ALL_HTML
		}
	},
	setMatter(matter){
		return {
			type: constants.UPLOAD_SET_MATTER,
			matter
		}
	},
	setDatabase(database){
		return {
			type: constants.UPLOAD_SET_DATABASE,
			database
		}
	},
	createParsePstJob(DiscoveryJobs, file){
		console.log('adding file ' + fileObj._id + ' to parsePst job queue');
		const parsePstJob = new Job(DiscoveryJobs, 'parsePst', 
			{_id:file._id}
		);
		parsePstJob.priority('normal')
		parsePstJob.retry({retries:50, wait:60000})
		parsePstJob.save();
		console.log('added file ' + file._id + ' to parsePst job queue');
	},
	createParseZipJob(DiscoveryJobs, file){
		console.log('adding file ' + file._id + ' to parseZip job queue');
		const parseZipJob = new Job(DiscoveryJobs, 'parseZip', 
			{ _id:file._id}
		);
		parseZipJob.priority('normal')
		parseZipJob.retry({retries:50, wait:60000})
		parseZipJob.save();
		console.log('added file ' + file._id + ' to parseZip job queue');
	},
	createConvertPdfJob(DiscoveryJobs, file){
		console.log('adding file ' + file + ' to convert Pdf queue');
		const convertPdfJob = new Job(DiscoveryJobs, 'convertPdf',
			{
				_id:file._id, 
				name: file.name, 
				type:file.type, 
				database: file.meta.database
			}
		);
		convertPdfJob.priority('normal')
		convertPdfJob.retry({retries:50, wait:60*1000})
		convertPdfJob.save();
		console.log('added file ' + file._id + ' to imagePdf job queue');
	},
	createConvertHtmlJob(DiscoveryJobs, file){
		console.log('adding file ' + file._id + ' to convert Html queue');
		const convertHtmlJob = new Job(DiscoveryJobs, 'convertHtml',
			{
				_id:file._id, 
				name: file.name, 
				type:file.type, 
				database: file.meta.database
			}
		);
		convertHtmlJob.priority('normal')
		convertHtmlJob.retry({retries:50, wait:60*1000})
		convertHtmlJob.save();
		console.log('added file ' + file._id + ' to convert Html job queue');
	},
	createExtractTextJob(DiscoveryJobs, file){
		console.log('adding file ' + file._id + ' to extractText job queue');
		const extractTextJob = new Job(DiscoveryJobs, 'extractText', 
			{
				_id:file._id, 
				name: file.name, 
				type:file.type, 
				annotateText: file.meta.annotateText,
				translate: file.meta.translate,
				allowLSA: file.meta.allowLSA,
				createCorpus: file.meta.createCorpus,
				semanticAnalysis: file.meta.semanticAnalysis,
				database: file.meta.database
		});
		extractTextJob.priority('normal')
		extractTextJob.retry({retries:50, wait:60000})
		extractTextJob.save();
		console.log('added file ' + file._id + ' to extractText job queue');
	},
	createExtractMetaJob(DiscoveryJobs, file){
		console.log('adding file ' + file._id + ' to extract Meta queue');
		const extractMetaJob = new Job(DiscoveryJobs, 'extractMeta',
			{
				_id:file._id, 
				name: file.name, 
				type:file.type, 
				database: file.meta.database
			}
		);
		extractMetaJob.priority('normal')
		extractMetaJob.retry({retries:50, wait:60000})
		extractMetaJob.save();
		console.log('added file ' + file._id + ' to extract Meta queue');
	},
	createAnnotateTextJob(DiscoveryJobs, file){
		console.log('adding file ' + file._id + ' to annotate text queue');
		const annotateTextJob = new Job(DiscoveryJobs, 'annotateText',
			{
				_id:file._id, 
				name: file.name, 
				type:file.type, 
				database: file.meta.database
			}
		);
		annotateTextJob.priority('normal')
		annotateTextJob.retry({retries:50, wait:60000})
		annotateTextJob.save();
		console.log('added file ' + file._id + ' to annotate text queue');
	}
}