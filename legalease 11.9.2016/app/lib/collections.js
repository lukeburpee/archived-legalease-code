import { Mongo } from 'meteor/mongo';
import Grid from 'gridfs-stream';
import fs from 'fs';
import { MongoInternals } from 'meteor/mongo';

let gfs;
if (Meteor.isServer) {
  gfs = Grid(
    MongoInternals.defaultRemoteCollectionDriver().mongo.db,
    MongoInternals.NpmModule
  );
}
import { 
  onAfterCaseFileUpload,
  onAfterDiscoveryFileUpload,
  convertDiscoveryFileToPDF,
  interceptCaseFileDownload,
  interceptDiscoveryFileDownload,
  onAfterCaseFileRemove,
  onAfterDiscoveryFileRemove
  } from './config/uploadhelpers';

import {
  familySchema,
  fieldSchema,
  formSchema,
  timerSchema,
  folderSchema,
  emailSchema,
  chatSchema,
  caseSchema,
  scheduleSchema,
  matterSchema,
  searchSchema,
  caseFileSchema,
  clientSchema,
  firmSchema,
  discoveryFileSchema
} from './schema'

const Clients = new Mongo.Collection('clients').attachSchema(clientSchema);
const Firms = new Mongo.Collection('firms').attachSchema(firmSchema);
const Vendors = new Mongo.Collection('vendors');
const Cases = new Mongo.Collection('cases').attachSchema(caseSchema);
const Matters = new Mongo.Collection('matters').attachSchema(matterSchema);
const Schedules = new Mongo.Collection('schedules').attachSchema(scheduleSchema);
const Emails = new Mongo.Collection('emails').attachSchema(emailSchema);
const Timers = new Mongo.Collection('timers').attachSchema(timerSchema);
const Chats = new Mongo.Collection('chats').attachSchema(chatSchema);
const Families = new Mongo.Collection('families').attachSchema(familySchema);
const Fields = new Mongo.Collection('fields').attachSchema(fieldSchema);
const Forms = new Mongo.Collection('forms').attachSchema(formSchema);
const Searches = new Mongo.Collection('searches').attachSchema(searchSchema);
const Folders = new Mongo.Collection('folders').attachSchema(folderSchema);

const CaseFiles = new FilesCollection({
  collectionName: 'casefiles',
  debug: true,
  allowClientCode: false,
  onAfterUpload(file){
    onAfterCaseFileUpload.call(CaseFiles, file);

  },
  interceptDownload(http, file, versionName){
    return interceptCaseFileDownload(http, file, versionName);
  },
  onAfterRemove(file){
    return onAfterCaseFileRemove(file);
  }
});

const DiscoveryFiles = new FilesCollection({
  collectionName: 'discoveryfiles',
  debug: true,
  allowClientCode: false,
  onAfterUpload(file){
    if (file.meta.database === 'default'){
      console.log('using default database');
      onAfterDiscoveryFileUpload.call(DiscoveryFiles, file, gfs);
    }  else {
      console.log('using external database');
      const externalGfs = setExternalDiscoveryGfs(file.meta.matter);
      onAfterDiscoveryFileUpload.call(DiscoveryFiles, file, externalGfs);
    }
  },
  interceptDownload(http, file, versionName) {
    return interceptDiscoveryFileDownload(http, file, versionName, gfs);
  },
  onAfterRemove(file){
    return onAfterDiscoveryFileRemove(file, gfs);
  }
});

if(Meteor.isServer){
  DiscoveryFiles.denyClient();
}

function setDriver(uri){
  return new MongoInternals.RemoteCollectionDriver(uri);
}

function setGridfs(driver){
  return Grid(driver, MongoInternals.NpmModule);
}

function setExternalDiscoveryGfs(matter){
   const externalDriver = setDriver('mongodb://mongo1:27017,mongo2:27017,mongo3:27017/' + matter + '?replicaSet=appRS');
   const externalGfs = setGridfs(externalDriver);
   return externalGfs;
}

export {
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
	CaseFiles,
  DiscoveryFiles
}