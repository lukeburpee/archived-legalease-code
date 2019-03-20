'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var clientSchema = new Schema({
  name: String,
  active: Boolean,
  cases: Array,
  reviews: Array,
  users: Array,
  clientManagers: Array
});
module.exports = mongoose.model('Client', clientSchema);
exports.clientSchema = clientSchema;