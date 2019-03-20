import { Meteor } from 'meteor/meteor';
import { DiscoveryFiles } from './../../lib/collections';
import { HTTP } from 'meteor/http';
import { MongoInternals } from 'meteor/mongo';
import Grid from 'gridfs-stream';
var fs = require('fs');
var request = require('request');

import DiscoveryJobs from './../jobs'

let defaultGFS;
if (Meteor.isServer) {
  defaultGFS = Grid(
    MongoInternals.defaultRemoteCollectionDriver().mongo.db,
    MongoInternals.NpmModule
  );
}

export default function () {
	Meteor.methods({
		'get.file': Meteor.wrapAsync((id) => {
			let file = DiscoveryFiles.findOne({_id:id});
			let gridId = (file.versions['original'].meta || {}).gridFsFileId;
			if (gridId){
				if (file.meta.database === 'default'){
					let gfs = Grid(
						MongoInternals.defaultRemoteCollectionDriver().mongo.db,
						MongoInternals.NpmModule
					);
					console.log('searching default gridfs for: ', String(gridId));
					const readStream = gfs.createReadStream({_id: gridId});
					readStream.on('error', err => { console.log(err); });
					return readStream;
				} else {
					console.log('search external gridfs for: ', String(gridId));
					const url = 'mongodb://mongo1:27017,mongo2:27017,mongo3:27017/' +  discoveryfile.meta.matter + '?replicaSet=appRS';
					const database = new MongoInternals.RemoteCollectionDriver(url).mongo.db;
					const externalGfs = Grid(database, MongoInternals.NpmModule);
					const readStream = externalGfs.createReadStream({gridId});
					readStream.on('error', err => { console.log(err); });
					return readStream;
				}
			} else {
				return false;
			}
		}),
		'unzip': Meteor.wrapAsync(function(id, name, type){
			return
		}),
		'zip': Meteor.wrapAsync(function(id, name, type){
			return
		}),
		'check.gridfsId': function(id){
			const file = DiscoveryFiles.findOne({_id:id});
			const grid_id = (file.versions['original'].meta || {}).gridFsFileId;
			console.log(grid_id);
			if (grid_id){
				return true
			} else {
				return false
			}
		},
		'annotate.text': function(fileId, text){
			console.log('tokenizing text for file: ' + fileId);
			let annotatedText = documentAnalyzeAPI(text);
			let cleanAnnotatedText = JSON.parse(annotatedText.toString());
			let property = 'meta.annotations.text';
			DiscoveryFiles.update(fileId, { $set: { [property]: cleanAnnotatedText }});
		},
		'extract.text': function(id, name, type){
			console.log('starting text extraction for: ' + id);
			let readStream = getFileReadStream(id);
			let stream = documentExtractTextAPI(type);
			readStream.pipe(stream);
			stream.on('error', (error) => {console.log(error);});
			let text = '';
			stream.on('data', chunk => {
				text += chunk.toString();
			});
			stream.on('end', Meteor.bindEnvironment(() => {
				console.log(text);
				let property = 'meta.text';
				DiscoveryFiles.update(id, { $set: { [property]: text }});
				console.log('extracted text added to file: ' + id);
			}));
			return text;
		},
		'extract.meta': function(id, name, type){
			console.log('starting metadata extraction for: ' + id);
			let readStream = getFileReadStream(id);
			let stream = documentExtractMetaAPI(type);
			readStream.pipe(stream);
			stream.on('error', function(error){console.log(error);});
			let meta = '';
			stream.on('data', chunk => {
				meta += chunk.toString();
			});
			stream.on('end', Meteor.bindEnvironment(() => {
				console.log(meta);
				let jsonMeta = JSON.parse(meta);
				let property = 'meta.original';
				DiscoveryFiles.update(id, { $set: { [property]: jsonMeta }});
				console.log('extracted metadata added to file: ' + id);
			}));
		},
		'translate': Meteor.wrapAsync(function(inputFile, language){
			return
		}),
		'convert.html': function(id, name, type){
			const fileId = id;
			console.log('starting html conversion for: ' + fileId);
			let readStream = getFileReadStream(fileId);
			let fileOutputName = name.slice(0, name.indexOf('.')) + '.html';
			console.log(fileOutputName);
			const metadata = { versionName: 'html', discoveryfileId: id, uploadDate: new Date() };
			let writeStream = defaultGFS.createWriteStream({
				filename: fileOutputName, 
				content_type:'text/html'
			});
			let stream = documentConvertAPI(type, 'text/html');
			readStream.pipe(stream);
			stream.on('error', function(error){console.log(error); });
			stream.pipe(writeStream);
			writeStream.on('error', function(error){console.log(error); });
			writeStream.on('close', Meteor.bindEnvironment(file => {
				console.log('html written to file: ' + file.filename);
				let property = 'versions.html.meta.gridFsFileId';
				DiscoveryFiles.update({_id:fileId}, { $set: { [property]: file._id.toString()}});
				console.log('converted html info added to file: ' + file._id);
				writeStream.end();
			}));
		},
		'convert.pdf': function(id, name, type){
			const fileId = id;
			console.log('starting pdf conversion for: ' + fileId);
			let readStream = getFileReadStream(fileId);
			let fileOutputName = name.slice(0, name.indexOf('.')) + '.pdf';
			console.log(fileOutputName);
			const metadata = { versionName: 'html', discoveryfileId: id, uploadDate: new Date() };
			let writeStream = defaultGFS.createWriteStream({
				filename: fileOutputName, 
				content_type:'application/pdf'
			});
			let stream = documentConvertAPI(type, 'application/pdf');
			readStream.pipe(stream);
			stream.on('error', function(error){console.log(error); });
			stream.pipe(writeStream);
			writeStream.on('error', function(error){console.log(error); });
			writeStream.on('close', Meteor.bindEnvironment(file => {
				console.log('pdf written to file: ' + file.filename);
				let property = 'versions.pdf.meta.gridFsFileId';
				DiscoveryFiles.update({_id:fileId}, { $set: { [property]: file._id.toString()}});
				console.log('converted pdf info added to file: ' + file._id);
				writeStream.end();
			}));
		}
	})
};

function getFileReadStream(id){
	let file = DiscoveryFiles.findOne({_id:id});
	let gridId = (file.versions['original'].meta || {}).gridFsFileId;
	if (gridId){
		if (file.meta.database === 'default'){
			let gfs = Grid(
				MongoInternals.defaultRemoteCollectionDriver().mongo.db,
				MongoInternals.NpmModule
			);
			console.log('searching default gridfs for: ', String(gridId));
			const readStream = gfs.createReadStream({_id: gridId});
			readStream.on('error', err => { console.log(err); });
			return readStream;
		} else {
			console.log('search external gridfs for: ', String(gridId));
			const url = 'mongodb://mongo1:27017,mongo2:27017,mongo3:27017/' +  discoveryfile.meta.matter + '?replicaSet=appRS';
			const database = new MongoInternals.RemoteCollectionDriver(url).mongo.db;
			const externalGfs = Grid(database, MongoInternals.NpmModule);
			const readStream = externalGfs.createReadStream({gridId});
			readStream.on('error', err => { console.log(err); });
			return readStream;
		}
	} else {
		return false;
	}
};

function getPdfFileReadStream(id){
	let file = DiscoveryFiles.findOne({_id:id});
	let gridId = (file.versions['pdf'].meta || {}).gridFsFileId;
	if (gridId){
		if (file.meta.database === 'default'){
			let gfs = Grid(
				MongoInternals.defaultRemoteCollectionDriver().mongo.db,
				MongoInternals.NpmModule
			);
			console.log('searching default gridfs for: ', String(gridId));
			const readStream = gfs.createReadStream({_id: gridId});
			readStream.on('error', err => { console.log(err); });
			return readStream;
		} else {
			console.log('search external gridfs for: ', String(gridId));
			const url = 'mongodb://mongo1:27017,mongo2:27017,mongo3:27017/' +  discoveryfile.meta.matter + '?replicaSet=appRS';
			const database = new MongoInternals.RemoteCollectionDriver(url).mongo.db;
			const externalGfs = Grid(database, MongoInternals.NpmModule);
			const readStream = externalGfs.createReadStream({gridId});
			readStream.on('error', err => { console.log(err); });
			return readStream;
		}
	} else {
		return false;
	}
};

function documentConvertAPI (inputType, outputType, data, callback){
	var	options = {
			url: Meteor.settings.UNOCONV_SERVER,
			headers: {
				'Content-Type': inputType,
				'Accept': outputType
			}
		};
	var isBuffer = data instanceof Buffer;
	if (typeof data === 'object' && !isBuffer) data = JSON.stringify(data);

	if (data){
		options.body = data;
	}
	if (isBuffer || !data) {
		options.encoding = null;
	}
	if (callback){
		request.post(options, function(err, response){
			if (err){ return callback(err); }
			if (response.statusCode !== 200){
				err = new Error(response.body);
				err.code = response.statusCode;
				return callback(err);
			}
			var result = response.body;
			console.log(result);
			if (isBuffer){
				return result;
			}
			callback(null, result);
		});
	} else {
		return request.post(options);
	}
};

function documentExtractTextAPI(type, data, callback){
	var options = {
		url: Meteor.settings.TIKA_SERVER + '/tika',
		headers: {
			'Content-type': type,
			'Accept': 'text/plain'
		}
	};
	var isBuffer = data instanceof Buffer;
	if (typeof data === 'object' && !isBuffer) data = JSON.stringify(data);

	if (data){
		options.body = data;
	}
	if (isBuffer || !data) {
		options.encoding = null;
	}
	if (callback){
		request.put(options, function(err, response){
			if (err){ return callback(err); }
			if (response.statusCode !== 200){
				err = new Error(response.body);
				err.code = response.statusCode;
				return callback(err);
			}
			var result =response.body;
			if (isBuffer){
				return result;
			}
			callback(null, result);
		});
	} else {
		return request.put(options);
	}
};

function documentExtractMetaAPI(type, data, callback){
	var options = {
		url: Meteor.settings.TIKA_SERVER + '/meta',
		headers: {
			Accept: 'application/json'
		}
	};
	var isBuffer = data instanceof Buffer;
	if (typeof data === 'object' && !isBuffer) data = JSON.stringify(data);

	if (data){
		options.body = data;
	}
	if (isBuffer || !data) {
		options.encoding = null;
	}
	if (callback){
		request.put(options, function(err, response){
			if (err){ return callback(err); }
			if (response.statusCode !== 200){
				err = new Error(response.body);
				err.code = response.statusCode;
				return callback(err);
			}
			var result = response.body;
			if (isBuffer){
				return result;
			}
			callback(null, result);
		});
	} else {
		return request.put(options);
	}
};

function documentZipAPI(type, data, callback){
	var options = {
		url: Meteor.settings.TIKA_SERVER + '/unpack',
		headers: {
			'Content-Type': type
		}
	};
	var isBuffer = data instanceof Buffer;
	if (typeof data === 'object' && !isBuffer) data = JSON.stringify(data);

	if (data){
		options.body = data;
	}
	if (isBuffer || !data) {
		options.encoding = null;
	}
	if (callback){
		request.post(options, function(err, response){
			if (err){ return callback(err); }
			if (response.statusCode !== 200){
				err = new Error(response.body);
				err.code = response.statusCode;
				return callback(err);
			}
			var result =response.body;
			if (isBuffer){
				return result;
			}
			callback(null, result);
		});
	} else {
		return request.post(options);
	}
};

function documentUnZipAPI(type, data, callback){
	var options = {
		url: Meteor.settings.TIKA_SERVER + '/unpack',
		headers: {
			'Content-Type': type
		}
	};
	var isBuffer = data instanceof Buffer;
	if (typeof data === 'object' && !isBuffer) data = JSON.stringify(data);

	if (data){
		options.body = data;
	}
	if (isBuffer || !data) {
		options.encoding = null;
	}
	if (callback){
		request.post(options, function(err, response){
			if (err){ return callback(err); }
			if (response.statusCode !== 200){
				err = new Error(response.body);
				err.code = response.statusCode;
				return callback(err);
			}
			var result =response.body;
			if (isBuffer){
				return result;
			}
			callback(null, result);
		});
	} else {
		return request.post(options);
	}
};

function documentAnalyzeAPI(text, callback){
	var options = {
		url: Meteor.settings.CORENLP_SERVER + '?properties={"annotators":"tokenize,ssplit,pos","outputFormat":"json"}',
		body: text
	};
	request.post(options, function(err, response){
		if (err){ return console.log(err); }
		return request.post(options);
	});
};