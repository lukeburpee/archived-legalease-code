'use strict';

var express = require('express');
var chalk = require('chalk');
var config = require('./config/environment');
var mongoose = require('mongoose');

var services = process.env.VCAP_SERVICES;
var mongo_conn_str = '';
var OS_config = {};

if (services) {
	var env = JSON.parse(services);
	if (env['mongodb-2.4']) {
		var mongo = env['mongodb-2.4'][0]['credentials'];
		if (mongo.url) {
			mongo_conn_str = mongo.url;
		} else {
			console.log("No mongo found");
		}
	} else {
		mongo_conn_str = 'mongodb://localhost:27017';
	}
} else {
	mongo_conn_str = 'mongodb://localhost:27017';
}

mongoose.connect(mongo_conn_str, config.mongo.options);

// Populate DB with sample data
require('./config/seed');

var app = express();

require('./config/express')(app);
require('./routes')(app);


module.exports = app;
