import { Accounts } from 'meteor/accounts-base';
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
import Grid from 'gridfs-stream';
import fs from 'fs';
import { MongoInternals } from 'meteor/mongo';

import {onAfterDiscoveryFileUpload} from './../lib/config/uploadhelpers'

let gfs;
if (Meteor.isServer) {
  gfs = Grid(
    MongoInternals.defaultRemoteCollectionDriver().mongo.db,
    MongoInternals.NpmModule
  );
}

export default function(){
	// Insert Initial Accounts
	if (!Accounts.findUserByUsername('lukeburpee')){
		Accounts.createUser({
			username: 'lukeburpee',
			email: 'xxxxxx@gmail.com',
			password: 'xxxxxx'
		});
		const user = Accounts.findUserByUsername('lukeburpee');
		Roles.addUsersToRoles(user._id, ['primary'], Roles.GLOBAL_GROUP);
		Accounts.createUser({
			username:'firm',
			email: 'firm@firm.com',
			password: 'firm'
		});
		const firm = Accounts.findUserByUsername('firm');
		Roles.addUsersToRoles(firm._id, ['firm'], Roles.GLOBAL_GROUP);
		Accounts.createUser({
			username:'client',
			email: 'client@client.com',
			password: 'client'
		});
		const client = Accounts.findUserByUsername('client');
		Roles.addUsersToRoles(client._id, ['client'], Roles.GLOBAL_GROUP);
		Accounts.createUser({
			username:'vendor',
			email: 'vendor@vendor.com',
			password: 'vendor'
		});
		const vendor = Accounts.findUserByUsername('vendor');
		Roles.addUsersToRoles(vendor._id, ['vendor'], Roles.GLOBAL_GROUP);
	}
	// Insert Test Clients
	// Insert Test Firms
	// Insert Test Vendors
	// Insert Test Cases
	// Insert Test Case Files
	// Insert Test Forms
	if (Forms.find().count() === 0){
			Forms.insert({label:'form 1', matter: 'matter1', sections:[
					{label:'section 1', editLabel:true, fields:[
						{label:'field 1', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 2', fields:[
						{label:'field 1', type:'checkboxlist', value: ['option1', 'option2'], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'radiolist', value: [''], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 1', type:'checkboxlist', value: [''], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'radiolist', value: [''], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 3', fields:[
						{label:'field 1', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 4', fields:[
						{label:'field 1', type:'chip', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 5', fields:[
						{label:'field 1', type:'chip', value: [''], colSpan:2},
						{label:'field 2', type:'textarea', value:[''], colSpan:2},
						{label:'field 1', type:'text', value: [''], colSpan:2},
						{label:'field 2', type:'textarea', value:[''], colSpan:2},
						
					]},
					{label:'section 5', fields:[
						{label:'field 1', type:'checkboxlist', columns:2, colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'},{label:'option 3', value:'option3'},{label:'option 4', value:'option4'}], value:[]}					
					]}
				]});
			Forms.insert({label:'form 2', matter: 'matter2', sections:[
					{label:'section 1', editLabel:true, fields:[
						{label:'field 1', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 2', fields:[
						{label:'field 1', type:'checkboxlist', value: ['option1', 'option2'], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'radiolist', value: [''], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 1', type:'checkboxlist', value: [''], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'radiolist', value: [''], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 3', fields:[
						{label:'field 1', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 4', fields:[
						{label:'field 1', type:'chip', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 5', fields:[
						{label:'field 1', type:'chip', value: [''], colSpan:2},
						{label:'field 2', type:'textarea', value:[''], colSpan:2},
						{label:'field 1', type:'text', value: [''], colSpan:2},
						{label:'field 2', type:'textarea', value:[''], colSpan:2},
						
					]},
					{label:'section 5', fields:[
						{label:'field 1', type:'checkboxlist', columns:2, colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'},{label:'option 3', value:'option3'},{label:'option 4', value:'option4'}], value:[]}					
					]}
				]});
			Forms.insert({label:'form 3', matter:'matter1', sections:[
					{label:'section 1', editLabel:true, fields:[
						{label:'field 1', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 2', fields:[
						{label:'field 1', type:'checkboxlist', value: ['option1', 'option2'], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'radiolist', value: [''], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 1', type:'checkboxlist', value: [''], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'radiolist', value: [''], colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 3', fields:[
						{label:'field 1', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 4', fields:[
						{label:'field 1', type:'chip', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]},
						{label:'field 2', type:'checkboxlist', value: [''], options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'}]}
					]},
					{label:'section 5', fields:[
						{label:'field 1', type:'chip', value: [''], colSpan:2},
						{label:'field 2', type:'textarea', value:[''], colSpan:2},
						{label:'field 1', type:'text', value: [''], colSpan:2},
						{label:'field 2', type:'textarea', value:[''], colSpan:2},
						
					]},
					{label:'section 5', fields:[
						{label:'field 1', type:'checkboxlist', value:[''], columns:2, colSpan:2, options:[{label:'option 1', value:'option1'},{label:'option 2', value:'option2'},{label:'option 3', value:'option3'},{label:'option 4', value:'option4'}]}					
					]}
				]});
		}
			// Insert Test DiscoveryFiles
	if (DiscoveryFiles.find().count() === 0){
		DiscoveryFiles.load('http://localhost:3000/testfiles/pst.zip',{
			name:'allen-p.pst', 
			meta:{
				controlId: 'M_ONE_C_ONE_0000',
				matter: 'matter1',
				collection: 'collection1',
				database: 'default',
				custodian: 'Test',
				collectionPrefix: 'TEST',
				convertPst:true
			}
		},function(err, fileRef){
			if(err){
				console.log(err)
			};
		},true);
		DiscoveryFiles.load('http://localhost:3000/testfiles/ao136.pdf',{
			name:'ao136.pdf', 
			type:'application/pdf',
			meta:{
				controlId: 'M_ONE_C_ONE_0002',
				matter: 'matter1',
				collection:'collection1',
				database: 'default',
				custodian: 'Test',
				collectionPrefix: 'TEST',
				extractMeta: true,
				extractText: true,
				convertPdf: false,
				convertHtml: true,
				annotateText: true,
				translate: true,
				allowLSA: true,
				createCorpus: true,
				semanticAnalysis: true,
				collectPasswords: true,
				removeDuplicates: true
			}
		},function(err, fileRef){
			if(err){
				console.log(err)
			};
		},true);
		DiscoveryFiles.addFile('http://localhost:3000/testfiles/ao153_0.pdf',{
			name:'ao153_0.pdf', 
			type:'application/pdf',
			meta:{
				controlId: 'M_ONE_C_ONE_0003',
				matter: 'matter1',
				collection:'collection1',
				database: 'default',
				custodian: 'Test',
				collectionPrefix: 'TEST',
				extractMeta: true,
				extractText: true,
				convertPdf: false,
				convertHtml: true,
				annotateText: true,
				translate: true,
				allowLSA: true,
				createCorpus: true,
				semanticAnalysis: true,
				collectPasswords: true,
				removeDuplicates: true
			}
		},function(err, fileRef){
			if(err){
				console.log(err)
			};
		},true);
	}
}	

