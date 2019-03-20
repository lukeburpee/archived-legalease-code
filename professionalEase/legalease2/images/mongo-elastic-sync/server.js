var ESMongoSync = require('node-elasticsearch-sync');

console.log('Setting up default elasticsearch collection sync...');

var clientWatcher = {
  collectionName: 'clients',
  index: 'entities',
  type: 'clients',
  fetchExistingDocuments: true, 
  priority: 0
};
var firmWatcher = {
  collectionName: 'firms',
  index: 'entities',
  type: 'firms',
  fetchExistingDocuments: true,
  priority: 0
};

var vendorWatcher = {
  collectionName: 'vendors',
  index: 'entities',
  type: 'vendors',
  fetchExistingDocuments: true, 
  priority: 0
};

var matterWatcher = {
  collectionName: 'matters',
  index: 'matters',
  type: 'main',
  fetchExistingDocuments: true,
  priority: 0
};

var caseWatcher = {
  collectionName: 'cases',
  index: 'matters',
  type: 'cases',
  fetchExistingDocuments: true,
  priority: 0
};

var caseFileWatcher = {
  collectionName: 'casefiles',
  index: 'matterfiles',
  type: 'caseFiles',
  fetchExistingDocuments: true,
  priority: 0
};

var discoveryFileWatcher = {
  collectionName: 'discoveryfiles',
  index: 'matterfiles',
  type: 'discoveryfiles',
  fetchExistingDocuments: true,
  priority: 0
};

var watcherArray =  [];

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

var finalCallBack = function(){
  return null
}

var data = "mongodb://mongo1:27017,mongo2:27017,mongo3:27017/app?replicaSet=appRS";
var oplog = "mongodb://mongo1:27017,mongo2:27017,mongo3:27017/local?replicaSet=appRS"
var elastic = "http://elastic1:9200";

var config = {
  mongo: {
    data: data,
    oplog: oplog,
    batch: 100
  },
  elastic: elastic
};

ESMongoSync.init(config, watcherArray, null);

console.log('default elastic search collection sync established');

