import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { FilesCollection } from 'meteor/ostrio:files'
import { MongoInternals } from 'meteor/mongo'
import Grid from 'gridfs-stream'

import Schema from './../schema'

let connectionUri;
let driver;
let collection;
let gfs;
let storageServerDriver;

let Families;
let Fields;
let Forms;
let Folders;
let Searches;
let Files;

export function AccessExternalDatabase(entity, uri){
	connectionUri = uri + '/' + entity;
	driver = setDriver(connectionUri);
	Families, Fields, Forms, Folders, Searches = setDefaultCollections(driver);
	DiscoveryFiles = setFilesCollection(driver);
	Gridfs = setGridfs(driver);
	return Families, Fields, Forms, Folders, Searches, DiscoveryFiles;
}

function setDriver(uri){
	return new MongoInternals.RemoteCollectionDriver(uri);
}

function setGridfs(driver){
	return Grid(driver, MongoInternals.NpmModule);
}

function setDefaultCollections(driver) {
	Families = new Mongo.Collection('families', {_driver:driver}).attachSchema(Schema.familySchema);
	Fields = new Mongo.Collection('fields', {_driver:driver}).attachSchema(Schema.fieldSchema)
	Forms = new Mongo.Collection('forms', {_driver:driver}).attachSchema(Schema.formSchema);
	Folders = new Mongo.Collection('folders', {_driver:driver}).attachSchema(Schema.folderSchema);
	Searches = new Mongo.Collection('searches', {_driver:driver}).attachSchema(Schema.searchSchema);
	return Families, Fields, Forms, Folders, Searches;
}

function setFilesCollection(driver){
	return new FilesCollection({
		collection: new Mongo.Collection('discoveryfiles', {_driver: driver}),
		debug:true,
		schema: fileSchema,
		allowClientCode: false
	});
}