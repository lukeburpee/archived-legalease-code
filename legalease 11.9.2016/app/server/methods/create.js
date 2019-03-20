import { Meteor } from 'meteor/meteor'
import { AccessExternalCaseFiles, AccessExternalDiscoveryFiles, AccessExternalDefaults } from './../../lib/config/aedb'

import {
	Clients,
	Firms,
	Vendors,
	Cases,
	Matters,
	Schedules,
	Emails,
	Timers,
	Chats,
	Families,
	Fields,
	Forms,
	Searches,
	Folders,
	CaseFiles,
	DiscoveryFiles
} from './../../lib/collections'

import Schema from './../../lib/schema'

export default function() {
	Meteor.methods({
		'clients.create'(userId, data){

		}
	});
	Meteor.methods({
		'firms.create'(userId, data){

		}
	});
	Meteor.methods({
		'cases.create'(userId, data){

		}
	});
	Meteor.methods({
		'matters.create'(userId, data){

		}
	});
	Meteor.methods({
		'vendors.create'(userId, data){

		}
	});
	Meteor.methods({
		'schedules.create'(userId, data){

		}
	});
	Meteor.methods({
		'emails.create'(userId, data){

		}
	});
	Meteor.methods({
		'timers.create'(userId, data){

		}
	});
	Meteor.methods({
		'chat.create'(userId, data){

		}
	});
	Meteor.methods({
		'folders.create'(userId, data){

		}
	});
	Meteor.methods({
		'searches.create'(userId, data){

		}
	});
	Meteor.methods({
		'forms.create'(userId, data){

		}
	});
	Meteor.methods({
		'fields.create'(userId, data){

		}
	});
}