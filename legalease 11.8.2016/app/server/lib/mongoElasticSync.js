/**import { Meteor } from 'meteor/meteor';
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
	collectionName: 'caseFiles',
	index: 'matterFiles',
	type: 'caseFiles',
	fetchExistingDocuments: true,
	priority: 0
};

let discoveryFileWatcher = {
	collectionName: 'discoveryFiles',
	index: 'matterFiles',
	type: 'discoveryFiles',
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

let config = {
	mongo: {
		data: Meteor.settings.DATA_MONGO_URL,
		oplog: Meteor.settings.MONGO_OPLOG_URL,
		batch: 100
	},
	elastic: Meteor.settings.SEARCH_ELASTIC_URL
};

ESMongoSync.init(config, watcherArray, null);

console.log('default elastic search collection sync established');
**/