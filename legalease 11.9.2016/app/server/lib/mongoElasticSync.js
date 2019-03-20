import { Meteor } from 'meteor/meteor';
import ESMongoSync from 'node-elasticsearch-sync';

console.log('Setting up default elasticsearch collection sync...');

let clientWatcher = {
	collectionName: 'clients',
	index: 'entities',
	type: 'clients',
	fetchExistingDocuments: true,	
	priority: 0
};
let firmWatcher = {
	collectionName: 'firms',
	index: 'entities',
	type: 'firms',
	fetchExistingDocuments: true,
	priority: 0
};

let vendorWatcher = {
	collectionName: 'vendors',
	index: 'entities',
	type: 'vendors',
	fetchExistingDocuments: true,	
	priority: 0
};

let matterWatcher = {
	collectionName: 'matters',
	index: 'matters',
	type: 'main',
	fetchExistingDocuments: true,
	priority: 0
};

let caseWatcher = {
	collectionName: 'cases',
	index: 'matters',
	type: 'cases',
	fetchExistingDocuments: true,
	priority: 0
};

let caseFileWatcher = {
	collectionName: 'casefiles',
	index: 'matterfiles',
	type: 'caseFiles',
	fetchExistingDocuments: true,
	priority: 0
};

let discoveryFileWatcher = {
	collectionName: 'discoveryfiles',
	index: 'matterfiles',
	type: 'discoveryfiles',
	fetchExistingDocuments: true,
	priority: 0
};

let watcherArray =  [];

watcherArray.push(
	clientWatcher, 
	firmWatcher, 
	vendorWatcher, 
	matterWatcher, 
	caseWatcher, 
	caseFileWatcher, 
	discoveryFileWatcher
);
// initialize package as below

let finalCallBack = function(){
  return null
}

let data = Meteor.settings.DATA_MONGO_URL;
let oplog = Meteor.settings.MONGO_OPLOG_URL;
let elastic = Meteor.settings.SEARCH_ELASTIC_URL;

let config = {
	mongo: {
		data: data,
		oplog: oplog,
		batch: 100
	},
	elastic: elastic
};

ESMongoSync.init(config, watcherArray, null);

console.log('default elastic search collection sync established');
