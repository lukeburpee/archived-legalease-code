import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
var fs = require('fs');
var request = require('request');
var mime = require('mime');

export default function () {
	Meteor.methods({
		'doc.unzip': Meteor.wrapAsync(function(inputFile){
			let inputType = mime.lookup(inputFile);
		}),
		'doc.zip': Meteor.wrapAsync(function(inputFile){
			let inputtype = mime.lookup(inputFile);
		}),
		'doc.extract.text': Meteor.wrapAsync(function(inputFile){
			let inputType = mime.lookup(inputFile);
		}),
		'doc.extract.metadata': Meteor.wrapAsync(function(inputFile){
			let inputType = mime.lookup(inputFile);
		}),
		'doc.translate': Meteor.wrapAsync(function(inputFile, language){
			let inputType = mime.lookup(inputFile);
		}),
		'doc.convert.html': Meteor.wrapAsync(function(inputFile){
			let inputType = mime.lookup(inputFile);
			let fileOutputName = inputFile.slice(0, inputFile.indexOf('.')) + '.html';
			console.log(fileOutputName);
			let fileOutput = process.cwd() + '/../web.browser/app' + fileOutputName;
			fs.exists(fileOutput, function(exists){
				if (exists){
					console.log(exists,fileOutputName);
					return fileOutput;
				} else {
					fs.open(fileOutput, 'wx', function(err){ console.log(err);});
					let writeStream = fs.createWriteStream(fileOutput);
					let stream = documentConvertAPI(inputType, 'text/html');
					fs.createReadStream(process.cwd() + '/../web.browser/app' + inputFile).pipe(stream);
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
		'doc.convert.pdf': Meteor.wrapAsync(function(inputFile){
			let inputType = mime.lookup(inputFile);
			let fileOutputName = inputFile.slice(0, inputFile.indexOf('.')) + '.pdf';
			console.log(fileOutputName);
			let fileOutput = process.cwd() + '/../web.browser/app' + fileOutputName;
			fs.exists(fileOutput, function(exists){
				if (exists){
					console.log(exists,fileOutputName);
					return fileOutput;
				} else {
					fs.open(fileOutput, 'wx', function(err){ console.log(err);});
					let writeStream = fs.createWriteStream(fileOutput);
					let stream = documentConvertAPI(inputType, 'application/pdf');
					fs.createReadStream(process.cwd() + '/../web.browser/app' + inputFile).pipe(stream);
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

function documentConvertAPI(inputType, outputType, data, callback){
	var options = {
		url: 'http://localhost:32778/document',
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

function documentExtractTextAPI(data, callback){
	var options = {
		url: 'http://localhost:32768/tika',
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

function documentExtractMetaDataAPI(data, inputType, callback){
	var options = {
		url: 'http://localhost:32768/rmeta',
		headers: {
			'Content-Type': inputType
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

function documentZipAPI(data, inputType, callback){
	var options = {
		url: 'http://localhost:32768/unpack',
		headers: {
			'Content-Type': inputType
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

function documentUnZipAPI(data, inputType, callback){
	var options = {
		url: 'http://localhost:32768/unpack',
		headers: {
			'Content-Type': inputType
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