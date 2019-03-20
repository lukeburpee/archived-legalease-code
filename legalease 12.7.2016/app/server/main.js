import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

import './../lib/collections/clients'
import './../lib/collections/firms'
import './../lib/collections/vendors'
import './../lib/collections/cases'
import './../lib/collections/matters'
import './../lib/collections/schedules'
import './../lib/collections/timers'
import './../lib/collections/emails'
import './../lib/collections/messages'
import './../lib/collections/forms'
import './../lib/collections/folders'
import './../lib/collections/searches'
import './../lib/collections/casefiles'
import './../lib/collections/discoveryfiles'

import DiscoveryJobs from './jobs';

import clientMethods from './methods/clients';
import firmMethods from './methods/firms';
import caseMethods from './methods/cases';
import matterMethods from './methods/matters';
import discoveryfileMethods from './methods/discoveryfiles';

clientMethods();
firmMethods();
caseMethods();
matterMethods();
discoveryfileMethods();

Meteor.startup(() => {
	if (!Accounts.findUserByUsername('lukeburpee')){
		Accounts.createUser({
			username: 'lukeburpee',
			email: 'lukeburpee@gmail.com',
			password: 'xxxxxx'
		});
		const user = Accounts.findUserByUsername('lukeburpee');
		Roles.addUsersToRoles(user._id, ['primary'], Roles.GLOBAL_GROUP);
	}
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
