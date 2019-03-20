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

import discoveryFileSchema from './schema'

const DiscoveryFiles = new FilesCollection({
  collectionName: 'discoveryfiles',
  debug: true,
  allowClientCode: true,
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

export default DiscoveryFiles;