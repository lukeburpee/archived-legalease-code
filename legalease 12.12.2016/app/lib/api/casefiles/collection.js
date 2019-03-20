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
  interceptCaseFileDownload,
  onAfterCaseFileRemove
  } from './../../config/uploadhelpers';

import caseFileSchema from './schema'

const CaseFiles = new FilesCollection({
  collectionName: 'casefiles',
  debug: true,
  allowClientCode: false,
  onAfterUpload(file){
      console.log('using default database');
      onAfterCaseFileUpload.call(CaseFiles, file, gfs);
  },
  interceptDownload(http, file, versionName) {
    return interceptCaseFileDownload(http, file, versionName, gfs);
  },
  onAfterRemove(file){
    return onAfterCaseFileRemove(file, gfs);
  }
});

if(Meteor.isServer){
  CaseFiles.denyClient();
}

export default CaseFiles