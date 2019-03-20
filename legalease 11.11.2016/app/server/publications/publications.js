import { Meteor } from 'meteor/meteor'
import { AccessExternalDatabase, AccessExternalDefaults, AccessExternalCaseFiles, AccessExternalDiscoveryFiles } from './../../lib/config/aedb'
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

Meteor.publish('clients.all', function(){
	return Clients.find();
});

Meteor.publish('client.firms', function(clientId){
	return Clients.findById(clientId, {fields: firms});
});

Meteor.publish('client.cases', function(clientId){
	return Clients.findById(clientId, {fields: cases});
});

Meteor.publish('client.matters', function(clientId){
	return Clients.findById(clientId, {fields: matters});
});

Meteor.publish('firms.all', function(){
	return Firms.find();
});

Meteor.publish('cases.all', function(){
	return Cases.find();
});

Meteor.publish('default.case.casefiles', function(caseId){
	return Cases.findById(caseId, {fields: casefiles});
});

Meteor.publish('default.case.casefiles.search', function(search){
	return CaseFiles.find(search);
});

Meteor.publish('default.case.discoveryfiles', function(caseId){
	return Cases.findById(caseId, {fields: discoveryfiles});
});

Meteor.publish('default.case.discoveryfiles.search', function(search){
	return DiscoveryFiles.find(search);
});

Meteor.publish('external.case.defaults', function(caseId){
	return Case.findById(caseId, {fields: {families, fields, forms, searches, folders}})
});

Meteor.publish('external.case.casefiles', function(caseId, caseUri){
	let CaseFiles = AccessExternalCaseFiles(caseId, caseUri);
	return CaseFiles;
});

Meteor.publish('external.case.discoveryfiles', function(caseId, caseUri){
	let DiscoveryFiles = AccessExternalDiscoveryFiles(caseId, caseUri)
	return DiscoveryFiles;
});

Meteor.publish('user.clients', function(userId){
	return
});

Meteor.publish('user.firms', function(userId){
	return
});

Meteor.publish('user.cases', function(userId){
	return
});

Meteor.publish('user.matters', function(userId){
	return
});

Meteor.publish('user.schedules', function(userId){
	return
});

Meteor.publish('user.email', function(userId){
	return
});

Meteor.publish('user.chat', function(userId){
	return
});

Meteor.publish('casefiles.default.all', function(){
	return CaseFiles.find().cursor;
});

Meteor.publish('discoveryfiles.default.all', function(){
	return DiscoveryFiles.find().cursor;
});

Meteor.publish('discoveryfiles.default.one.link', function(id){
	return DiscoveryFiles.findOne({_id:id}).link();
})

