import { JobCollection } from 'meteor/vsivsi:job-collection';
import { DiscoveryFiles } from './../../lib/collections'

export const ConvertHTMLJobs = new JobCollection('convertHtmlQueue');
export const ConvertPDFJobs = new JobCollection('convertPdfQueue');
export const ExtractMetaJobs = new JobCollection('extractMetaQueue');
export const ExtractTextJobs = new JobCollection('extractTextQueue');

function addFileToHTMLConversionQueue(file){
	const Job = new Job(ConvertHTMLJobs, 'convertHtml', file);
	Job.priority('normal')
	.retry({ 
		retries: 5,
		wait: 10*60*1000
	 })
	.delay(2*60*1000)
	.save()
}

const htmlWorkers = Job.processJobs('convertHtmlQueue', 'convertHtml', (job, cb) => {
	const discoveryfile = job.data;
	const fileData = interceptDiscoveryFileDownload(http, file, 'original', gfs);
	documentConvertAPI(file.type, 'text/html', fileData, (data, err) => {
		if (err){
			job.log(err, { level: 'warning'});
			job.fail(':' + err);
		} else {
			const outputFileName = discoveryfile.name.slice(0, discoveryfile.name.indexOf('.')) + '.html';
			const writeStream = gfs.createWriteStream({ filename: outputFileName, metadata });
			data.pipe(writeStream);
			writeStream.on('close', Meteor.bindEnvironment(file => {
				console.log('discoveryfile html written to gridfs');
				const property = 'versions.html.meta.gridFsFileId';
				DiscoveryFiles.update(discoveryfile._id, { $set: { [property]: file._id.toString() } });
				job.done();
			}));
			writeStream.on('error', (err) => {
				job.log(err);
				job.fail(':' + err);
			});
		}
	})
	cb();
});



function addFileToPDFConversionQueue(file){
	const Job = new Job(ConvertPDFJobs, 'convertPdf',file);
	Job.priority('normal')
	.retry({ 
		retries: 5,
		wait: 10*60*1000
	 })
	.delay(2*60*1000)
	.save()
}

const pdfWorkers = Job.processJobs('convertPdfQueue', 'convertPdf', (job, cb) => {
	const file = job.data;
	const fileData = interceptDiscoveryFileDownload(http, file, 'original', gfs);
	documentConvertAPI(file.type, 'application/pdf', fileData, (data, err) => {
		if (err){
			job.log(err, { level: 'warning' });
			job.fail('' + err);
		} else {
			const outputFileName = file.name.slice(0, file.name.indexOf('.')) + '.pdf';
			const writeStream = gfs.createWriteStream({ filename: outputFileName, metadata });	
			data.pipe(writeStream);
			writeStream.on('close', Meteor.bindEnvironment(file => {
				console.log('discoveryfile pdf written to gridfs');
				const property = 'versions.pdf.meta.gridFsFileId';
				DiscoveryFiles.update(discoveryfile._id, { $set: { [property]: file._id.toString() } });
				job.done();
			}));
			writeStream.on('error', (err) => {
				job.log(err);
				job.fail(':', err);
			});
		}
	})
	cb();
});

function addFileToMetaExtractionQueue(file){
	const Job = new Job(ExtractMetaJobs, 'extractMeta',file);
	Job.priority('normal')
	.retry({ 
		retries: 5,
		wait: 10*60*1000
	 })
	.delay(2*60*1000)
	.save()
}

const metaWorkers = Job.processJobs('extractMetaQueue', 'extractMeta', (job, cb) => {
	const file = job.data;
	const fileData = interceptDiscoveryFileDownload(http, file, 'original', gfs);
	documentExtractMetaAPI(fileData, (meta, err) => {
		if (err){
			job.log(err, { level: 'warning' });
			job.fail('' + err);
		} else {
			console.log(meta);
			const property = 'meta.metadata';
			DiscoveryFiles.update(discoveryfile._id, { $set: { [property]: file._id.toString() } });
			job.done();
		}
	})
	cb();
});



function addFileToTextExtractionQueue(file){
	const Job = new Job(ExtractTextJobs, 'extractText', file);
	Job.priority('normal')
	.retry({ 
		retries: 5,
		wait: 10*60*1000
	 })
	.delay(2*60*1000)
	.save()
}

const textWorkers = Job.processJobs('extractTextQueue', 'extractText', (job, cb) => {
	const file = job.data;
	const fileData = interceptDiscoveryFileDownload(http, file, 'original', gfs);
	documentExtractTextAPI(fileData, (text, err) => {
		if (err){
			job.log(err, { level: 'warning' });
			job.fail(''+ err );
		} else {
			console.log(text);
			const property = 'meta.text';	
			DiscoveryFiles.update(discoveryfile._id, { $set: { [property]: file._id.toString() } });
			job.done();
		}
	})
	cb();
});
