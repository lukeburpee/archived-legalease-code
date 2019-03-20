import { JobCollection } from 'meteor/vsivsi:job-collection';
import { DiscoveryFiles } from './../../lib/collections'
import {
documentConvertAPI,
documentExtractTextAPI,
documentExtractMetaDataAPI,
documentZipAPI,
documentUnZipAPI
} from './conversionhelpers'

export const ConvertHTMLJobs = new JobCollection('convertHtmlQueue');
ConvertHTMLJobs.allow({
	admin: function(userId, method, params){
		return true;
	}
});
ConvertHTMLJobs.setLogStream(process.stdout);
export const ConvertPDFJobs = new JobCollection('convertPdfQueue');
ConvertPDFJobs.allow({
	admin: function(userId, method, params){
		return true;
	}
});
ConvertPDFJobs.setLogStream(process.stdout);
export const ExtractMetaJobs = new JobCollection('extractMetaQueue');
ExtractMetaJobs.allow({
	admin: function(userId, method, params){
		return true;
	}
});
ExtractMetaJobs.setLogStream(process.stdout);
export const ExtractTextJobs = new JobCollection('extractTextQueue');
ExtractTextJobs.allow({
	admin: function(userId, method, params){
		return true;
	}
});
ExtractTextJobs.setLogStream(process.stdout);

const htmlWorkers = ConvertHTMLJobs.processJobs('convertHtml', (job, cb) => {
	const file = job.data;
	console.log('converting ' + file._id + ' to html');
	const fileData = interceptDiscoveryFileDownload(http, file, 'original', gfs);
	documentConvertAPI(file.type, 'text/html', fileData, (data, err) => {
		if (err){
			job.log(err, { level: 'warning'});
			job.fail(':' + err);
		} else {
			const outputFileName = file.name.slice(0, file.name.indexOf('.')) + '.html';
			const writeStream = gfs.createWriteStream({ filename: outputFileName, metadata });
			data.pipe(writeStream);
			writeStream.on('close', Meteor.bindEnvironment(fileInstance => {
				console.log('discoveryfile html written to gridfs');
				const property = 'versions.html.meta.gridFsFileId';
				DiscoveryFiles.update(discoveryfile._id, { $set: { [property]: fileInstance._id.toString() } });
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

const pdfWorkers = ConvertPDFJobs.processJobs('convertPdf', (job, cb) => {
	const file = job.data;
	console.log('converting ' + file._id + ' to pdf');
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

const metaWorkers = ExtractMetaJobs.processJobs('extractMeta', (job, cb) => {
	const file = job.data;
	console.log('extracting ' + file._id + ' metadata');
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

const textWorkers = ExtractTextJobs.processJobs('extractText', (job, cb) => {
	const file = job.data;
	console.log('extracting ' + file._id + ' text');
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
