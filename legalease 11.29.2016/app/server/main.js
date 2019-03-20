import { Meteor } from 'meteor/meteor';

import  * as Collections from './../lib/collections'
import DiscoveryJobs from './jobs'

import discoveryfiles from './methods/discoveryfiles';
//import './lib/mongoElasticSync'

discoveryfiles();

Meteor.startup(() => {
	Meteor.publish('all.discovery.jobs', () => {
		return DiscoveryJobs.find({});
	});
	Meteor.publish('all.extractText.jobs', () => {
		return DiscoveryJobs.find({type:'extractText'});
	});
	Meteor.publish('all.extractMeta.jobs', () => {
		return DiscoveryJobs.find({type: 'extractMeta'});
	});
	Meteor.publish('all.convertHtml.jobs', () => {
		return DiscoveryJobs.find({type: 'convertHtml'});
	});
	Meteor.publish('all.convertPdf.jobs', () => {
		return DiscoveryJobs.find({type: 'convertPdf'});
	});
	Meteor.publish('all.conversion.jobs', () => {
		return DiscoveryJobs.find({type: { $in: ['convertHtml', 'convertPdf'] } });
	});
	Meteor.publish('all.extraction.jobs', () => {
		return DiscoveryJobs.find({ type: { $in: ['extractText', 'extractMeta'] } });
	});

	return DiscoveryJobs.startJobServer()
});
