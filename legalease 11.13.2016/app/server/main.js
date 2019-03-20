import { Meteor } from 'meteor/meteor';

import  * as Collections from './../lib/collections'
import { 
	ExtractTextJobs,
	ExtractMetaJobs,
	ConvertHTMLJobs,
	ConvertPDFJobs
} from './lib/jobs'

import convert from './methods/convert'
import discoveryfiles from './methods/discoveryfiles';
//import './lib/mongoElasticSync'
convert();
discoveryfiles();
Meteor.startup(() => {
	Meteor.publish('all.extract.text.jobs', () => {
		return ExtractTextJobs.find({});
	});
	Meteor.publish('all.extract.meta.jobs', () => {
		return ExtractMetaJobs.find({});
	});
	Meteor.publish('all.convert.html.jobs', () => {
		return ConvertHTMLJobs.find({});
	});
	Meteor.publish('all.convert.pdf.jobs', () => {
		return ConvertPDFJobs.find({});
	});

	return ExtractTextJobs.startJobServer(), 
	ExtractMetaJobs.startJobServer(), 
	ConvertHTMLJobs.startJobServer(), 
	ConvertPDFJobs.startJobServer()
});
