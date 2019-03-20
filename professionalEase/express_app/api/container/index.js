'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./container.controller');
var auth = require('../../auth/auth.service');


// Container Routes
router.get('/', controller.index);
router.get('/:containerName', controller.getContainer);


module.exports = router;