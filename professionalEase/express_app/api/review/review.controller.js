'use strict';

var Review = require('./review.model');
var express = require('express');
var multer = require('multer');
var storageClient = require('../object_storage/storageClient.service');
var multerStorage = require('multer-storage-pkgcloud');


function handleError (res, err) {
  return res.status(500).send(err);
}

exports.index = function(req, res) {};

exports.getReview = function(req, res) {};

// Get all Review Containers
exports.getAllReviewContainers = function(req, res) {};

// Get a specified Review Container
exports.getReviewContainer = function(req, res) {
	storageClient.getContainer(String(req.params.reviewContainer), function(err, container) {
		if (err) {return handleError(res, err); }
		if (!container) {return res.json(401); }
		if (container.metadata.containerType != 'Review') { res.status(401).json({ msg: 'requested container is not Review container'}); }
		res.status(200).json(container);
	});
};

// Adds a user to Review Container Metadata
exports.addUserToReviewContainer = function(req, res) {
	storageClient.getContainer(String(req.params.reviewContainer), function(err, reviewContainer) {
		if (err) {return handleError(res, err); }
		if (!reviewContainer) {return res.json(401); }
		if (Array(reviewContainer.metadata.reviewManagers).indexOf(req.params.id) === -1) { return res.json(403); }
		var reviewUsers = Array(reviewContainer.metadata.users);
		reviewUsers.push(req.body.userId);
		reviewContainer.metadata.users = reviewUsers;
		storageClient.updataContainerMetadata(reviewContainer, function(err, container) {
			if (err) { return handleError(res, err); }
			console.log('New user %s added to review %s', s(req.body.id, req.params.reviewContainer));
		});
		if (req.body.reviewRole === 'reviewManager') {
			var reviewManagers = reviewContainer.metadata.reviewManagers;
			reviewManagers.push(req.body.id);
			reviewContainer.metadata.reviewManagers = reviewManagers;
			storageClient.updataContainerMetadata(reviewContainer, function (err, container) {
				if (err) { return handleError(res, err); }
				console.log('New reviewManager %s added to review %s', s(req.body.id, req.params.reviewContainer));
				res.status(200).json(container);
			});
			res.status(200).json(reviewContainer);
		};
	});
};

// Remove user from Review Container metadata
exports.removeUserFromReviewContainer = function(req, res) {};

// Creates a container for Review
exports.createReviewContainer = function(req, res) {
	var containerName = String(req.params.clientName) + '_' + String(req.params.reviewName);
	storageClient.getContainer(String(req.params.clientName), function(err, clientContainer) {
		if (err) {return handleError(res, err); }
		if (!clientContainer) { return res.json(401); }
		if (Array(clientContainer.metadata.clientManagers).indexOf(req.params.id) == -1) { return res.json(403); }
		var clientReviews = Array(clientContainer.metadata.reviews);
		clientReviews.push(String(req.params.reviewName));
		clientContainer.reviews = clientReviews;
		storageClient.updateContainerMetadata(clientContainer, function(err, container) {
			if (err) {return handleError(res, err); }
			console.log('Client Container Updated: ', clientContainer);
		});
		storageClient.createContainer({
			name: containerName,
			metadata: {
				containerType: 'Review',
				client: req.clientId,
				cases: req.body.cases,
				reviewManagers: [req.params.id],
				users: [req.params.id]
			}
		},
		function(err, container) {
			if (err) {return handleError(res, err); }
			res.status(201).json(container);
		});
	});
};

// Deletes specified review container
exports.deleteReviewContainer = function(req, res) {};

// TO DO
// File APIs



exports.getReviewFile = function(req, res) {
	storageClient.getFile(String(req.params.reviewName), String(req.params.fileName),
		function(err, file) {
			if (err) { return handleError(res, err); }
			res.status(200).json(file);
	});
};

exports.getAllReviewFiles = function(req, res) {
	storageClient.getFiles(String(req.params.reviewName),
		function(err, files) {
			if (err) { return handleError(res, err); }
			res.status(200).json(files);
	});
};

exports.addReviewFile = function(req, res) {
	storageClient.getContainer(String(req.params.reviewName), 
		function(req, container) {
			if (err) { return handleError(res, err); }
			if (!container) { return res.status(404).json('Review Container not found');}
			if (Array(container.metadata.reviewManagers).indexOf(req.params.id) === -1) { return res.json(403); }
			var reviewFileCount = container.count;
			var reviewFileStorage = multerStorage({
				client : storageClient,
				destination : function (req, file, cb) {
					cb(null, {
						container : String(req.params.reviewName),
						remote : String(req.params.reviewName) + '_' + String(reviewFileCount),
						metadata: {
							client: req.params.clientName,
							caseName: req.parmas.caseName
						}
					});
				}
			});
			var reviewFileUploader = multer({ storage : reviewFileStorage}).single('reviewFile');
			reviewFileUploader(req, res, function(err) {
				if (err) { return handleError(res, err); }
			});
			return res.status(200).json(req.file)
	});
};

exports.deleteReviewFile = function(req, res) {};

exports.addMultipleReviewFiles = function(req, res) {
	storageClient.getContainer(String(req.body.reviewName), 
		function(req, container) {
			if (err) { return handleError(res, err); }
			if (!container) { return res.status(404).json('Review Container not found');}
			var reviewFileCount = container.count;
			var reviewFileStorage = multerStorage({
				client : storageClient,
				destination : function (req, file, cb) {
					cb(null, {
						container : String(req.body.reviewName),
						remote : String(req.body.projectPrefix) + '_' + String(reviewFileCount),
						metadata: {
							client: req.body.clientName,
							caseName: req.body.caseName
						}
					});
				}
			});
			var reviewFileUploader = multer({ storage : reviewFileStorage}).array('fileArray');
			reviewFileUploader(req, res, function(err) {
				if (err) { return handleError(res, err); }
			});
			return res.status(200).json(req.file)
	});
};

exports.deleteAllReviewFiles = function(req, res) {};


