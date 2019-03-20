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
  onAfterDiscoveryFileUpload,
  convertDiscoveryFileToPDF,
  interceptDiscoveryFileDownload,
  onAfterDiscoveryFileRemove
  } from './config/uploadhelpers';

  import {
	documentConvertAPI,
	documentExtractTextAPI,
	documentExtractMetaAPI,
} from './config/conversionhelpers';

import {
  discoveryFileSchema
} from './../../schema'

const DiscoveryFiles = new FilesCollection({
  collectionName: 'discoveryfiles',
  debug: true,
  allowClientCode: false,
  onAfterUpload(file){
      console.log('using default database');
      onAfterDiscoveryFileUpload.call(DiscoveryFiles, file, gfs);
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

function addFileToHTMLConversionQueue(file){
  const Job = new Job(ConvertHTMLJobs, 'convertHtml', file);
  Job.priority('normal')
  .retry({ 
    retries: 5,
    wait: 10*60*1000
   })
  .delay(2*60*1000)
  .save()
}

function addFileToPDFConversionQueue(file){
  const Job = new Job(ConvertPDFJobs, 'convertPdf',file);
  Job.priority('normal')
  .retry({ 
    retries: 5,
    wait: 10*60*1000
   })
  .delay(2*60*1000)
  .save()
}

function addFileToMetaExtractionQueue(file){
  const Job = new Job(ExtractMetaJobs, 'extractMeta',file);
  Job.priority('normal')
  .retry({ 
    retries: 5,
    wait: 10*60*1000
   })
  .delay(2*60*1000)
  .save()
}

function addFileToTextExtractionQueue(file){
  const Job = new Job(ExtractTextJobs, 'extractText', file);
  Job.priority('normal')
  .retry({ 
    retries: 5,
    wait: 10*60*1000
   })
  .delay(2*60*1000)
  .save()
}

export default DiscoveryFiles