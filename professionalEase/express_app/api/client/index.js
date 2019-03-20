'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./client.controller');
var auth = require('../../auth/auth.service');


// Container Routes

router.get('/', controller.index);
router.get('/allClientContainers', controller.getAllClientContainers);
router.get('/:clientContainer', controller.getClientContainer);
router.put('/:clientContainer', controller.addUserToClientContainer);
router.post('/', controller.createClient);


// File Routes
router.get('/:clientName/:fileName', controller.getCaseFile);
router.get('/:clientName/allFiles', controller.getAllCaseFiles);
router.post('/:clientName/upload', controller.addMultipleCaseFiles);


module.exports = router;