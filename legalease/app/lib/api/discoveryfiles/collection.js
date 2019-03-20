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
  } from './../../config/uploadhelpers';

import {
  createJobs
} from './../../config/jobs.helper';

import discoveryFileSchema from './schema';
import DiscoveryJobs from './../jobs/collection';


const DiscoveryFiles = new FilesCollection({
  collectionName: 'discoveryfiles',
  debug: true,
  allowClientCode: true,
  onAfterUpload(file){
      console.log('using default database');
      onAfterDiscoveryFileUpload.call(DiscoveryFiles, file, gfs);
      console.log('creating file jobs');
      createJobs(file);
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

export default DiscoveryFiles;