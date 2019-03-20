import { Meteor } from 'meteor/meteor';
import { Clients } from './../../lib/collections';

Meteor.publish('clients.all', function(){
	return Clients.find();
});

Meteor.publish('client.firms', function(clientId){
	return Clients.findById(clientId, {fields: firms});
});

Meteor.publish('client.cases', function(clientId){
	return Clients.findById(clientId, {fields: cases});
});

Meteor.publish('client.matters', function(clientId){
	return Clients.findById(clientId, {fields: matters});
});