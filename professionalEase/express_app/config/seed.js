'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
  User.create({
    firstName: 'Luke',
    lastName: 'Burpee',
    role: 'primary',
    clients: [{
        name: 'newClient'
    }, {
        name: 'otherClient'
    }],
    cases: [{
        name: 'newCase'
    }, {
        name: 'otherCase'
    }],
    reviews: [{
        name: 'newClient_newReview'
    }, {
        name: 'otherReview'
    }],
    subordinates: [{
        name: 'Bill'
    }, {
        name: 'John'
    }, {
        name: 'Mark'
    }],
    role: 'primary',
    projects: [
    {
        _id: 1,
    	name: 'ACME Corp. Backend App'
    }, {
        _id: 2,
    	name:'ACME Corp. Frontend App'
    }, {
        _id: 3,
    	name: 'Creapond'
    }, {
        _id: 4,
        name: 'Withinpixels'
    }],
    email: 'primary@primary.com',
    password: 'primary'
  }, function() {
  	console.log("Users Populated");
});
});