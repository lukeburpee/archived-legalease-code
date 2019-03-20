'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./review.controller');
var auth = require('../../auth/auth.service');


// Container Routes
router.get('/', controller.index);
router.get('/:id', controller.getReview);
router.get('/:reviewContainer', controller.getReviewContainer);
router.get('/allReviewContainers', controller.getAllReviewContainers);
router.put('/:reviewContainer', controller.addUserToReviewContainer);
router.post('/:clientName/:reviewName', controller.createReviewContainer);


// File Routes
router.get('/:reviewName/:fileName', controller.getReviewFile);
router.get('/:reviewName/allFiles', controller.getAllReviewFiles);
router.post('/upload', controller.addMultipleReviewFiles);


module.exports = router;