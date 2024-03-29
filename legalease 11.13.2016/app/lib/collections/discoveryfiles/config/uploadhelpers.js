import Grid from 'gridfs-stream';
import fs from 'fs';
import { MongoInternals } from 'meteor/mongo';
import { documentConvertAPI } from './conversionhelpers';

let gfs;
if (Meteor.isServer) {
  gfs = Grid(
    MongoInternals.defaultRemoteCollectionDriver().mongo.db,
    MongoInternals.NpmModule
  );
}

export function onAfterCaseFileUpload(casefile){
	console.log('casefile uploaded: ', casefile);
	Object.keys(casefile.versions).forEach(versionName => {
		const metadata = { versionName, casefileId: casefile._id, uploadDate: new Date() };
		const writeStream = gfs.createWriteStream({ filename: discoveryfile.name, metadata });
		fs.createReadStream(casefile.versions[versionName].path).pipe(writeStream);
		writeStream.on('close', Meteor.bindEnvironment(file => {
			const property = 'versions.' + versionName + '.meta.gridFsFileId';

			this.collection.update(casefile._id, { $set: { [property]: file._id.toString() } });
			this.unlink(this.collection.findOne(casefile._id), versionName);
		}));
	});
}

export function onAfterDiscoveryFileUpload(discoveryfile, gfs){
	console.log('discovery file uploaded: ', discoveryfile);
	if (discoveryfile.meta.database === 'default') {
		console.log('writing to default gridfs: ', String(discoveryfile._id));
		fileVersionsToGfs.call(this, discoveryfile, gfs);
	} else {
		console.log('writing to external gridfs: ', String(discoveryfile._id));
		const url = 'mongodb://mongo1:27017,mongo2:27017,mongo3:27017/' +  discoveryfile.meta.matter + '?replicaSet=appRS';
		const database = new MongoInternals.RemoteCollectionDriver(url).mongo.db;
		const externalGfs = Grid(database, MongoInternals.NpmModule);
		fileVersionsToGfs.call(this, discoveryfile, externalGfs);
	}
}

function fileVersionsToGfs(discoveryfile, gfs){
	Object.keys(discoveryfile.versions).forEach(versionName => {
		const metadata = { versionName, discoveryfileId: discoveryfile._id, uploadDate: new Date() };
		const writeStream = gfs.createWriteStream({ filename: discoveryfile.name, metadata });
		fs.createReadStream(discoveryfile.versions[versionName].path).pipe(writeStream);
		writeStream.on('close', Meteor.bindEnvironment(file => {
			console.log('discoveryfile written to gridfs');
			const property = 'versions.' + versionName + '.meta.gridFsFileId';
			this.collection.update(discoveryfile._id, { $set: { [property]: file._id.toString() } });
			this.unlink(this.collection.findOne(discoveryfile._id), versionName);
		}));
	});
}

export function interceptCaseFileDownload(http, casefile, versionName, gfs){
	const _id = (casefile.versions[versionName].meta || {}).gridFsFileId;
	if (_id) {
		const readStream = gfs.createReadStream({_id});
		readStream.on('error', err => { throw err});
		readStream.pipe(response);
	}
	return Boolean(_id);
}

export function interceptDiscoveryFileDownload(http, discoveryfile, versionName, gfs){
	const _id = (discoveryfile.versions[versionName].meta || {}).gridFsFileId;
	console.log(String(_id));
	if (_id) {
		if (discoveryfile.meta.database === 'default'){
			console.log('searching default gridfs for: ', String(_id));
			const readStream = gfs.createReadStream({_id: _id});
			readStream.on('error', err => { throw err});
			readStream.pipe(http.response);
		} else {
			console.log('search external gridfs for: ', String(_id));
			const url = 'mongodb://mongo1:27017,mongo2:27017,mongo3:27017/' +  discoveryfile.meta.matter + '?replicaSet=appRS';
			const database = new MongoInternals.RemoteCollectionDriver(url).mongo.db;
			const externalGfs = Grid(database, MongoInternals.NpmModule);
			const readStream = externalGfs.createReadStream({_id});
			readStream.on('error', err => { throw err });
			readStream.pipe(http.response);
		}
	}
	return Boolean(_id);
}

export function sendPdfVersion(http, discoveryfile){
	const _id = (discoveryfile.version['original'].meta || {}).gridFsFileId;
	if (_id) {
		const readStream = gfs.createReadStream({_id: _id});
		const convertStream = documentConvertAPI(discoveryfile.type, 'application/pdf');
		readStream.on('error', err => { throw err});
		readStream.pipe(convertStream);
		convertStream.on('error', err => { throw err});
		convertStream.on('data', data => {
			data.pipe(http.response);
		});
	}
}

export function sendHtmlVersion(http, discoveryfile){
	const _id = (discoveryfile.version['original'].meta || {}).gridFsFileId;
	if (_id) {
		const readStream = gfs.createReadStream({_id: _id});
		const convertStream = documentConvertAPI(discoveryfile.type, 'text/html');
		readStream.on('error', err => { throw err});
		readStream.pipe(convertStream);
		convertStream.on('error', err => { throw err});
		convertStream.on('data', data => {
			data.pipe(http.response);
		});
	}
}

export function onAfterCaseFileRemove(casefiles){
	casefiles.forEach(casefile => {
		Object.key(casefile.versions).forEach(versionName => {
			const _id = (casefile.version[versionName].meta || {}).gridFsFileId;
			if (_id) gfs.remove({_id}, err => { if (err) throw err; });
		});
	});
}

export function onAfterDiscoveryFileRemove(discoveryfiles){
	discoveryfiles.forEach(discoveryfile => {
		Object.key(discoveryfile.versions).forEach(versionName => {
			const _id = (discoveryfile.version[versionName].meta || {}).gridFsFileId;
			if (_id) gfs.remove({_id}, err => { if (err) throw err; });
		});
	});
}