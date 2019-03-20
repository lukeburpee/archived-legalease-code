import { Meteor } from 'meteor/meteor';
import { JobCollection } from 'meteor/vsivsi:job-collection';
import { DiscoveryFiles } from './../../lib/collections'
import { Mongo } from 'meteor/mongo';
import Grid from 'gridfs-stream';
import fs from 'fs';
import { MongoInternals } from 'meteor/mongo';
let gfs;
if (Meteor.isServer) {
  gfs = Grid(
    MongoInternals.defaultRemoteCollectionDriver().mongo.db,
    MongoInternals.NpmModule
  );
}

const DiscoveryJobs = new JobCollection('discoveryJobsQueue');

DiscoveryJobs.allow({
	admin: function(userId, method, params){
		return true;
	}
});


const htmlWorkers = DiscoveryJobs.processJobs('convertHtml', (job, cb) => {
	const file = job.data;
	Meteor.call('convert.html', file._id, file.name, file.type, function(error, result){
		if (error){ console.log(error); }
		if (result){
			job.done()
		}
	});
	cb();
});

const pdfWorkers = DiscoveryJobs.processJobs('convertPdf', (job, cb) => {
	const file = job.data;
	console.log('converting ' + file._id + ' to pdf');
	Meteor.call('convert.pdf', file._id, file.name, file.type, function(error, result){
		if (error){ console.log(error); }
		if (result){
			job.done()
		}
	});
	cb();
});

const metaWorkers = DiscoveryJobs.processJobs('extractMeta', (job, cb) => {
	const file = job.data;
	console.log('extracting ' + file._id + ' metadata');
	Meteor.call('extract.meta', file._id, file.name, file.type, function(error, result){
		if (error){ console.log(error); }
		if (result){
			job.done()
		}
	});
	cb();
});

const textWorkers = DiscoveryJobs.processJobs('extractText', (job, cb) => {
	const file = job.data;
	console.log('extracting ' + file._id + ' text');
	Meteor.call('extract.text', file._id, file.name, file.type, function(error, result){
		if (error){ console.log(error); }
		if (result){
			if (file.meta.annotateText){
				const annotationJob = new Job(DiscoveryJobs, 'annotateText',
					{ _id: file._id, text: result }
				);
				annotationJob.priority('normal');
				annotationJob.retry({retries:50})
				annotationJob.save()
			}
			job.done();
		}
	});
	cb();
});

const annotationWorkers = DiscoveryJobs.processJobs('annotateText', (job, cb) => {
	const text = job.data.text;
	console.log('tokenizing text for file: ' + job.data.fileId);
	Meteor.call('annotate.text', job.data._id, text, function(error, result){
		if (error){ console.log(error); }
		if (result){
			job.done()
		}
	});
})


export default DiscoveryJobs;