'use strict';

var express = require('express');
var multer = require('multer');
var storageClient = require('../object_storage/storageClient.service');
var multerStorage = require('multer-storage-pkgcloud');


function handleError (res, err) {
  return res.status(500).send(err);
}

// Gets all Primary, Client, and Review Containers
exports.index = function(req, res) {
	storageClient.getContainers(function(err, containers) {
		if (err) { return handleError(res, err); }
		res.status(200).json(containers);
	});
};

// Gets a specified container
exports.getContainer = function(req, res) {
	storageClient.getContainer(String(req.params.containerName), function(err, container) {
		if (err) { return handleError(res, err); }
		res.status(200).json(container);
	});
};

exports.updateContainer = function(req, res) {};

exports.deleteContainer = function(req, res) {};