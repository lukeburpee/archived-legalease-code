'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var reviewSchema = new Schema({
  		name: String,
  		active: Boolean,
  		keywords: Array,
      client: String,
      cases: Array,
  		users: Array
  	});

module.exports = mongoose.model('Review', reviewSchema);
exports.reviewSchema = reviewSchema;