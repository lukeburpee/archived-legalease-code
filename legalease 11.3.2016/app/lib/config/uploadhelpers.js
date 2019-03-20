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

export function onAfterCaseFileUpload(casefile){
	Object.keys(casefile.versions).forEach(versionName => {
		const metadata = { versionName, casefileId: casefile._id, uploadDate: new Date() };
		const writeStream = gfs.createWriteStream({ filename: discoveryfile.name, metadata });
		fs.createReadStream(discoveryfile.versions[versionName].path).pipe(writeStream);
		writeStream.on('close', Meteor.bindEnvironment(file => {
			const property = 'versions.${versionName}.meta.gridFsFileId';

			this.collection.update(casefile._id, { $set: { [property]: file._id.toString() } });
			this.unlink(this.collection.findOne(casefile._id), versionName);
		}));
	});
}

export function onAfterDiscoveryFileUpload(discoveryfile){
	Object.keys(discoveryfile.versions).forEach(versionName => {
		const metadata = { versionName, discoveryfileId: discoveryfile._id, uploadDate: new Date() };
		const writeStream = gfs.createWriteStream({ filename: discoveryfile.name, metadata });
		fs.createReadStream(discoveryfile.versions[versionName].path).pipe(writeStream);
		writeStream.on('close', Meteor.bindEnvironment(file => {
			const property = 'versions.${versionName}.meta.gridFsFileId';

			this.collection.update(discoveryfile._id, { $set: { [property]: file._id.toString() } });
			this.unlink(this.collection.findOne(discoveryfile._id), versionName);
		}));
	});
}

export function interceptCaseFileDownload(http, casefile, versionName){
	const _id = (casefile.versions[versionName].meta || {}).gridFsFileId;
	if (_id) {
		const readStream = gfs.createReadStream({_id});
		readStream.on('error', err => { throw err});
		readStream.pipe(http.response);
	}
	return Boolean(_id);
}

export function interceptDiscoveryFileDownload(http, discoveryfile, versionName){
	const _id = (discoveryfile.versions[versionName].meta || {}).gridFsFileId;
	if (_id) {
		const readStream = gfs.createReadStream({_id});
		readStream.on('error', err => { throw err});
		readStream.pipe(http.response);
	}
	return Boolean(_id);
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