'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./fileConverter');


// Container Routes

router.get('/:container/:file', controller.convertToFormat);

// File Routes

module.exports = router;