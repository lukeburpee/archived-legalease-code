import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

import Clients from './../lib/api/clients/collection'
import Firms from './../lib/api/firms/collection'
import Vendors from './../lib/api/vendors/collection'
import Cases from './../lib/api/cases/collection'
import Matters from './../lib/api/matters/collection'
import Schedules from './../lib/api/schedules/collection'
import Timers from './../lib/api/timers/collection'
import Emails from './../lib/api/emails/collection'
import Chats from './../lib/api/chats/collection'
import Forms from './../lib/api/forms/collection'
import Searches from './../lib/api/searches/collection'
import CaseFiles from './../lib/api/casefiles/collection'
import DiscoveryFiles from './../lib/api/discoveryfiles/collection'

import DiscoveryJobs from './../lib/api/jobs/collection';

import clientMethods from './methods/clients';
import firmMethods from './methods/firms';
import caseMethods from './methods/cases';
import matterMethods from './methods/matters';
import discoveryfileMethods from './methods/discoveryfiles';

import seed from './seed';

clientMethods();
firmMethods();
caseMethods();
matterMethods();
discoveryfileMethods();

Meteor.startup(() => {
	seed();
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
