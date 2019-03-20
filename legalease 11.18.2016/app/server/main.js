import { Meteor } from 'meteor/meteor';

import  * as Collections from './../lib/collections'
import DiscoveryJobs from './lib/jobs'

import discoveryfiles from './methods/discoveryfiles';
//import './lib/mongoElasticSync'

discoveryfiles();

Meteor.startup(() => {
	Meteor.publish('all.convert.pdf.jobs', () => {
		return DiscoveryJobs.find({});
	});

	return DiscoveryJobs.startJobServer()
});
