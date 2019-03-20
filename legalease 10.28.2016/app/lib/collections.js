import { Mongo } from 'meteor/mongo';
import { 
  onAfterCaseFileUpload,
  onAfterDiscoveryFileUpload,
  interceptCaseFileDownload,
  interceptDiscoveryFileDownload,
  onAfterCaseFileRemove,
  onAfterDiscoveryFileRemove
  } from './uploadhelpers';

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
  schema: caseFileSchema,
  onAfterUpload(file){
    onAfterCaseFileUpload(file);
  },
  interceptDownload(http, file, versionName){
    interceptCaseFileDownload(http, file, versionName);
  },
  onAfterRemove(file){
    onAfterCaseFileRemove(file);
  }
});

const DiscoveryFiles = new FilesCollection({
  collectionName: 'discoveryfiles',
  schema: discoveryFileSchema,
  onAfterUpload(file){
    onAfterDiscoveryFileUpload(file);
  },
  interceptDownload(http, file, versionName){
    interceptDiscoveryFileDownload(http, file, versionName);
  },
  onAfterRemove(file){
    onAfterDiscoveryFileRemove(file);
  }
});

export default {
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