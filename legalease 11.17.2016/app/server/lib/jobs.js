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
			job.done()
		}
	});
	cb();
});


export default DiscoveryJobs;