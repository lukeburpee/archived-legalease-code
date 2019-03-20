'use strict';

var express = require('express');
var multer = require('multer');
var Client = require('./client.model');
var User = require('../user/user.model')
var storageClient = require('../object_storage/storageClient.service');
var multerStorage = require('multer-storage-pkgcloud');


function handleError (res, err) {
  return res.status(500).send(err);
}

exports.index = function(req, res) {};

// Gets all Client Containers
exports.getAllClientContainers = function(req, res) {};

// Gets a specified Client Container
exports.getClientContainer = function(req, res) {
	storageClient.getContainer(String(req.params.clientContainer), function(err, container) {
		if (err) {return handleError(res, err); }
		if (!container) { return res.json(401); }
		if (container.metadata.containerType != 'Client') { res.status(401).json({ msg: 'requested container is not Client container'}); }
		res.status(200).json(container);
	});
};

// Adds a user to Client Container Metadata
exports.addUserToClientContainer = function(req, res) {
	storageClient.getContainer(String(req.params.clientContainer), function(err, clientContainer) {
		if (err) {return handleError(res, err); }
		if (!clientContainer) { return res.json(401); }
		if (Array(clientContainer.metadata.clientManagers).indexOf(req.params.id) === -1) { return res.json(403); }
		var clientUsers = Array(clientContainer.metadata.users);
		clientUsers.push(req.body.userId);
		clientContainer.metadata.users = clientUsers;
		storageClient.updateContainerMetadata(clientContainer, function (err, container) {
			if (err) { return handleError(res, err); }
			console.log('New user %s added to client %s', s(req.params.id, req.params.clientContainer));
		});
		if (req.body.clientRole === 'clientManager') {
			var clientManagers = Array(clientContainer.metadata.clientManagers);
			clientManagers.push(req.body.userId);
			clientContainer.metadata.clientManagers = clientManagers;
			storageClient.updateContainerMetadata(clientContainer, function(err, container) {
				if (err) {return handleError(res, err); }
				console.log(' New clientManager %s added to client %s', s(req.body.id, req.params.clientContainer));
				res.status(200).json(container);
			});
			res.status(200).json(clientContainer);
		};
	});
};

// Remove user from Client Container metadata
exports.removeUserFromClientContainer = function(req, res) {};

// Remove user from Review Container metadata
exports.removeUserFromReviewContainer = function(req, res) {};

// Creates a container for Client
exports.createClient = function(req, res) {
	Client.create(req.body, function(err, Client){
		if (err) { return handleError(err); }
		var containerName = String(req.body.name);
		storageClient.createContainer({
			name: containerName,
			metadata : {
				cases: [req.body.cases],
				clientManagers : [req.body.id],
				users : [req.body.id]
			}
		},
		function(err, container) {
			if (err) { return handleError(res, err); }
			res.status(201).json(container);
		});
	});
};

// deletes specified client container
exports.deleteClientContainer = function(req, res) {};

// Get single case file for particular client
exports.getCaseFile = function(req, res) {
	storageClient.getFile(String(req.params.clientName), String(req.params.fileName), 
		function(err, file) {
			if (err) { return handleError(res, err); }
			res.status(200).json(file);
	});
};

// Get all case files for a particular client
exports.getAllCaseFiles = function(req, res) {
	storageClient.getFiles(String(req.params.clientName), 
		function(err, files) {
			if (err) { return handleError(res, err); }
			res.status(200).json(files);
	});
};

exports.addCaseFile = function(req, res) {
	storageClient.getContainer(String(req.params.clientName),
		function(req, container) {
			if (err) { return handleError(res, err); }
			if (!container) {return res.status(404).json('Client Container not found');}
			if (Array(container.metadata.clientManagers).indexOf(req.params.id) === -1) { return res.json(403); }
			var caseFileCount = container.count;
			var caseFileStorage = multerStorage({
				client : storageClient,
				destination : function(req, file, cb) {
					cb(null, {
						container : String(req.params.clientName),
						remote : String(req.params.caseName) + '_' + String(caseFileCount),
						metadata : {
							client : req.params.clientName,
							caseName : req.params.caseName
						}
					});
				}
			});
			var caseFileUploader = multer({ storage : caseFileStorage }).single('caseFile');
			caseFileUploader(req, res, function(err) {
				if (err) { return handleError(res, err); }
			});
			return res.status(200).json(req.file);
	});
};

exports.deleteCaseFile = function(req, res) {};

exports.addMultipleCaseFiles = function(req, res) {
		storageClient.getContainer(String(req.params.clientName),
		function(err, container) {
			if (err) { return handleError(res, err); }
			if (!container) {return res.status(404).json('Client Container not found');}
			var caseFileCount = container.count;
			var caseFileStorage = multerStorage({
				client : storageClient,
				destination : function(req, file, cb) {
					cb(null, {
						container : String(req.body.clientName),
						remote : String(req.body.projectPrefix) + '_' + String(caseFileCount),
						metadata : {
							client : req.body.clientName,
							caseName : req.body.caseName
						}
					});
				}
			});
			var caseFileUploader = multer({ storage : caseFileStorage }).array('fileArray');
			caseFileUploader(req, res, function(err) {
				if (err) { res.status(500).json('failed to upload items'); }
			});
			return res.status(200).json(req.file);
		});
	};

exports.deleteAllCaseFiles = function(req, res) {};


