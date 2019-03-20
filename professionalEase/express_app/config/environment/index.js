'use strict';

var path = require('path');
var _ = require('lodash');

var all = {

  env: process.env.NODE_ENV || 'development',

  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  secrets: {
    session: process.env.SESSION_SECRET || 'secretKey'
  },

  userRoles: ['primary',
              'partner',  
              'associate',
              'clientManager',
              'reviewManager'
              ],
};

module.exports = _.merge(all, require('./' + all.env + '.js'));
