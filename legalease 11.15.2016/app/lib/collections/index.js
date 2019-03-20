/**import { Mongo } from 'meteor/mongo';
import Grid from 'gridfs-stream';
import fs from 'fs';
import { MongoInternals } from 'meteor/mongo';

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
      console.log('using default database');
      onAfterDiscoveryFileUpload.call(DiscoveryFiles, file, gfs);
      if (file.meta.extractText){
			addFileToTextExtractionQueue(file)
      }
      if (file.meta.extractMeta){
			addFileToMetaExtractionQueue(file);
      }
      if (file.meta.convertPDF){
      		addFileToPDFConversionQueue(file);
      }
      if (file.meta.convertHTML){
      		addFileToHTMLConversionQueue(file);
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
}**/

import Clients from './clients'
import Firms from './firms'
import Vendors from './vendors'
import Cases from './cases'
import Matters from './matters'
import Schedules from './schedules'
import Emails from './emails'
import Timers from './timers'
import Messages from './messages'
import Fields from './fields'
import Forms from './forms'
import Searches from './searches'
import CaseFiles from './casefiles'
import DiscoveryFiles from './discoveryfiles'

export {
	Clients,
	Firms,
	Vendors,
	Cases,
	Matters,
	Schedules,
	Emails,
	Timers,
	Messages,
	Fields,
	Forms,
	Searches,
	CaseFiles,
  DiscoveryFiles
}

