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

import { http } from 'meteor/http'

export const ConvertHTMLJobs = new JobCollection('convertHtmlQueue');
ConvertHTMLJobs.allow({
	admin: function(userId, method, params){
		return true;
	}
});
export const ConvertPDFJobs = new JobCollection('convertPdfQueue');
ConvertPDFJobs.allow({
	admin: function(userId, method, params){
		return true;
	}
});
export const ExtractMetaJobs = new JobCollection('extractMetaQueue');
ExtractMetaJobs.allow({
	admin: function(userId, method, params){
		return true;
	}
});
export const ExtractTextJobs = new JobCollection('extractTextQueue');
ExtractTextJobs.allow({
	admin: function(userId, method, params){
		return true;
	}
});

const htmlWorkers = ConvertHTMLJobs.processJobs('convertHtml', (job, cb) => {
	const file = job.data;
	Meteor.call('convert.html', file._id, file.name, file.type);
	cb();
});

const pdfWorkers = ConvertPDFJobs.processJobs('convertPdf', (job, cb) => {
	const file = job.data;
	console.log('converting ' + file._id + ' to pdf');
	Meteor.call('convert.pdf', file._id, file.name, file.type);
	cb();
});

const metaWorkers = ExtractMetaJobs.processJobs('extractMeta', (job, cb) => {
	const file = job.data;
	console.log('extracting ' + file._id + ' metadata');
	Meteor.call('extract.meta', file._id, file.name, file.type);
	cb();
});

const textWorkers = ExtractTextJobs.processJobs('extractText', (job, cb) => {
	const file = job.data;
	console.log('extracting ' + file._id + ' text');
	Meteor.call('extract.text', file._id, file.name, file.type);
	cb();
});
