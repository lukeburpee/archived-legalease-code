import { Meteor } from 'meteor/meteor';
import { DiscoveryFiles } from './../../lib/collections';
import { HTTP } from 'meteor/http';
import { MongoInternals } from 'meteor/mongo';
import Grid from 'gridfs-stream';
var fs = require('fs');
var request = require('request');

import DiscoveryJobs from './../lib/jobs'

let defaultGFS;
if (Meteor.isServer) {
  defaultGFS = Grid(
    MongoInternals.defaultRemoteCollectionDriver().mongo.db,
    MongoInternals.NpmModule
  );
}

export default function () {
	Meteor.methods({
		'unzip': Meteor.wrapAsync(function(id, name, type){
			return
		}),
		'zip': Meteor.wrapAsync(function(id, name, type){
			return
		}),
		'check.gridfsId': Meteor.wrapAsync(function(id){
			const file = DiscoveryFiles.findOne({_id:id});
			const grid_id = (file.versions['original'].meta || {}).gridFsFileId;
			console.log(grid_id);
			if (grid_id){
				return true
			} else {
				return false
			}
		}),
		'extract.text': Meteor.wrapAsync(function(id, name, type){
			console.log('starting text extraction for: ' + id);
			let readStream = getFileReadStream(id);
			let stream = documentExtractTextAPI(type);
			readStream.pipe(stream);
			let text = [];
			stream.on('data', Meteor.bindEnvironment(chunk => {
				text.push(chunk);
			}))
			let convertedText = text.toString('utf8');
			let property = 'meta.text';
			DiscoveryFiles.update(id, { $set: { [property]: convertedText }});
			console.log('extracted text added to file: ' + id);
			console.log(convertedText);
			stream.on('error', function(error){
				console.log(error);
			});
		}),
		'extract.meta': Meteor.wrapAsync(function(id, name, type){
			console.log('starting metadata extraction for: ' + id);
			let readStream = getFileReadStream(id);
			let stream = documentExtractMetaAPI(type);
			readStream.pipe(stream);
			stream.on('error', function(error){console.log(error);});
			let meta = [];
			stream.on('data', Meteor.bindEnvironment(chunk => {
				meta.push(chunk);
			}));
			let jsonMeta = JSON.parse(meta.toString('utf-8'));
			let property = 'meta.original';
			DiscoveryFiles.update(id, { $set: { [property]: jsonMeta }});
			console.log('extracted metadata added to file: ' + id);
			console.log(jsonMeta);
		}),
		'translate': Meteor.wrapAsync(function(inputFile, language){
			return
		}),
		'convert.html': Meteor.wrapAsync(function(id, name, type){
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
				let property = 'versions.html.meta';
				DiscoveryFiles.update({_id:fileId}, { $set: { [property]: { 
					filename: file.filename, 
						meta: {
							gridFsFileId: file._id.toString()
							}
						}
					}
				});
				console.log('converted html info added to file: ' + file._id);
				writeStream.end();
			}));
		}),
		'convert.pdf': Meteor.wrapAsync(function(id, name, type){
			const fileId = id;
			console.log('starting pdf conversion for: ' + fileId);
			let readStream = getFileReadStream(fileId);
			let fileOutputName = name.slice(0, name.indexOf('.')) + '.pdf';
			console.log(fileOutputName);
			const metadata = { versionName: 'pdf', discoveryfileId: id, uploadDate: new Date() };
			let writeStream = defaultGFS.createWriteStream({
				filename: fileOutputName, 
				content_type:'application/pdf',
				metadata
			});
			let stream = documentConvertAPI(type, 'application/pdf');
			stream.on('error', function(error){console.log(error);});
			readStream.pipe(stream);
			stream.on('error', function(error){console.log(error);});
			stream.pipe(writeStream);
			writeStream.on('error', function(err){console.log(err)})
			writeStream.on('close', Meteor.bindEnvironment(file => {
				console.log('pdf written to file: ' + file.filename);
				let property = 'versions.pdf.meta';
				DiscoveryFiles.update({_id:fileId}, { 
					$set: { [property]: { 
						filename: file.filename, 
							meta: {
								gridFsFileId: file._id.toString()
							}
						}
					}
				});
				console.log('converted pdf info added to file: ' + file._id);
				writeStream.end();
			}));
		})
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

function documentConvertAPI (inputType, outputType, data, callback){
	var	options = {
			url: Meteor.settings.UNOCONV_SERVER,
			headers: {
				'Content-Type': inputType,
				'Accept': outputType
			}
		};
	}
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

function documentAnalyzeAPI(type, data, callback){
	var options = {
		url: Meteor.settings.CORENLP_SERVER + '?properties={"annotators":"tokenize,ssplit,pos","outputFormat":"json"}',
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