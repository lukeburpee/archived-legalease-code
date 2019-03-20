'use strict';
var storageClient = require('./storageClient.service');
var fs = require('fs');
var formData = require('form-data');
var mime = require('mime-types');
var request = require('request');




exports.convertToFormat = function(req, res) {
	var inputContainer = String(req.params.container);
	var inputFile = String(req.params.file);

	downloadFile(inputContainer, inputFile);
	convertFileToPdf(inputFile);

	function downloadFile(container, file) {
		var outputFile = fs.createWriteStream(String(file));
		storageClient.download({
			container: container,
			remote : file
		}, function (err, result) {
			if (err) { return console.error('Failed to download the requested file for conversion: ', error); }
		}).pipe(outputFile);
	};

	function convertFileToPdf(file) {
		var outputFile = fs.createWriteStream(file.substring(0, file.lastIndexOf('.')) + '.pdf');
		var fileType = mime.contentType(file);
		var req = request.post('http://192.168.99.100');
		var form = req.form();
		form.append('my_file', fs.createReadStream(file), {
			contentType : fileType,
			accept : 'application/pdf'
		});

		form.submit( function(err, res) {
			if (err) { return console.error('failed to submit file for conversion: ', err); }
			console.log('conversion form submitted');
		})
		.pipe(outputFile)
		.on('error', function () {
			return console.error('failed to convert file: ', error);
		})
		.on('finish', function(file) {
			return console.log('converted file download complete');
		});
	};

	function uploadFile(container, fileStream, fileName) {

		var readStream = fileStream;
		var writeStream = storageClient.upload({
			container : container,
			remote : fileName
		});
		writeStream.on('error', function(err) {
			return console.error('Failed to upload converted file: ', err);
		});
		writeStream.on('success', function(file) {
			return console.log('Coverted file successfully uploaded to ObjectStorage: ', file);
		});
	};
};




