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
  interceptCaseFileDownload,
  onAfterCaseFileRemove
  } from './config/uploadhelpers';

  import {
	documentConvertAPI,
	documentExtractTextAPI,
	documentExtractMetaAPI,
} from './config/conversionhelpers';

import {
  caseFileSchema
} from './../../schema'

const CaseFiles = new FilesCollection({
  collectionName: 'casefiles',
  debug: true,
  allowClientCode: false,
  onAfterUpload(file){
      console.log('using default database');
      onAfterCaseFileUpload.call(CaseFiles, file, gfs);
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