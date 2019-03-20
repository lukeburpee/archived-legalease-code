import { Meteor } from 'meteor/meteor';
import { Vendors } from './../../lib/collections';

Meteor.publish('vendors.all', function(){
	return Vendors.find();
});