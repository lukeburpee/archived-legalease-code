import { Meteor } from 'meteor/meteor';
import { DiscoveryFiles } from './../../lib/collections';
import { HTTP } from 'meteor/http';
import { MongoInternals } from 'meteor/mongo';
import Grid from 'gridfs-stream';
var fs = require('fs');
var request = require('request');
var mime = require('mime');



export default function () {
	Meteor.methods({
		'unzip': Meteor.wrapAsync(function(id, name, type){
			return
		}),
		'zip': Meteor.wrapAsync(function(id, name, type){
			return
		}),
		'extract.text': Meteor.wrapAsync(function(id, name, type){
			console.log('starting text extraction for: ' + id);
			let readStream = getFileReadStream(id);
			if (!readStream){
				console.log('waiting for gridfs collection update...');
				return
			}
			let stream = documentExtractTextAPI(type, 'application/pdf');
			readStream.pipe(stream);
			stream.on('data', function(data){
				console.log(data);
				});
			stream.on('error', function(error){
				console.log(error);
			});
		}),
		'extract.meta': Meteor.wrapAsync(function(id, name, type){
			console.log('starting metadata extraction for: ' + id);
			let readStream = getFileReadStream(id);
			if (!readStream){
				console.log('waiting for gridfs collection update...');
				return
			}
			let stream = documentExtractMetaAPI(type);
			readStream.pipe(stream);
			stream.on('data', function(data){
				console.log(data);
				});
			stream.on('error', function(error){
				console.log(error);
			});
		}),
		'translate': Meteor.wrapAsync(function(inputFile, language){
			return
		}),
		'convert.html': Meteor.wrapAsync(function(id, name, type){
			console.log('starting html conversion for: ' + id);
			let readStream = getFileReadStream(id);
			if (!readStream){
				console.log('waiting for gridfs collection update...');
				return
			}
			let fileOutputName = name.slice(0, name.indexOf('.')) + '.html';
			console.log(fileOutputName);
			let fileOutput = process.cwd() + '/../web.browser/app' + fileOutputName;
			fs.exists(fileOutput, function(exists){
				if (exists){
					console.log(exists,fileOutputName);
					return fileOutput;
				} else {
					fs.open(fileOutput, 'wx', function(err){ console.log(err);});
					let writeStream = fs.createWriteStream(fileOutput);
					let stream = documentConvertAPI(type, 'text/html');
					readStream.pipe(stream);
					stream.on('data', function(data){
						var result = data;
						writeStream.write(result);
						writeStream.on('finish', function(){
							console.log('html written to file: ' + fileOutputName);
							writeStream.end();
						});
						return fileOutput;
					});
					stream.on('error', function(error){
						console.log(error);
					});
				}
			})
		}),
		'convert.pdf': Meteor.wrapAsync(function(id, name, type){
			console.log('starting pdf conversion for: ' + id);
			let readStream = getFileReadStream(id);
			if (!readStream){
				console.log('waiting for gridfs collection update...');
				return
			}
			let fileOutputName = name.slice(0, name.indexOf('.')) + '.pdf';
			console.log(fileOutputName);
			let fileOutput = process.cwd() + '/../web.browser/app' + fileOutputName;
			fs.exists(fileOutput, function(exists){
				if (exists){
					console.log(exists,fileOutputName);
					return fileOutput;
				} else {
					fs.open(fileOutput, 'wx', function(err){ console.log(err);});
					let writeStream = fs.createWriteStream(fileOutput);
					let stream = documentConvertAPI(type, 'application/pdf');
					readStream.pipe(stream);
					stream.on('data', function(data){
						var result = data;
						writeStream.write(result);
						writeStream.on('finish', function(){
							console.log('pdf written to file: ' + fileOutputName);
							writeStream.end();
						});
						return fileOutput;
					});
					stream.on('error', function(error){
						console.log(error);
					});
				}
			})
		})
	})
}

function getFileReadStream(id){
	let file = DiscoveryFiles.findOne({_id:id});
	let grid_id = (file.versions['original'].meta || {}).gridFsFileId;
	if (grid_id){
		if (file.meta.database === 'default'){
			let gfs = Grid(
				MongoInternals.defaultRemoteCollectionDriver().mongo.db,
				MongoInternals.NpmModule
			);
			console.log('searching default gridfs for: ', String(grid_id));
			const readStream = gfs.createReadStream({_id: grid_id});
			readStream.on('error', err => { console.log(err); });
			return readStream;
		} else {
			console.log('search external gridfs for: ', String(grid_id));
			const url = 'mongodb://mongo1:27017,mongo2:27017,mongo3:27017/' +  discoveryfile.meta.matter + '?replicaSet=appRS';
			const database = new MongoInternals.RemoteCollectionDriver(url).mongo.db;
			const externalGfs = Grid(database, MongoInternals.NpmModule);
			const readStream = externalGfs.createReadStream({grid_id});
			readStream.on('error', err => { console.log(err); });
			return readStream;
		}
	} else {
		return false;
	}
}

function documentConvertAPI(inputType, outputType, data, callback){
	var options = {
		url: Meteor.settings.UNOCONV_SERVER,
		headers: {
			'Content-Type': inputType,
			Accept: outputType
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
}

function documentExtractTextAPI(type, data, callback){
	var options = {
		url: Meteor.settings.TIKA_SERVER + '/tika',
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
}

function documentExtractMetaAPI(type, data, callback){
	var options = {
		url: Meteor.settings.TIKA_SERVER + '/rmeta',
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
}

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
}

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
}