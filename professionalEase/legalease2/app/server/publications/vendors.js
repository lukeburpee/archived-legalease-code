import { Meteor } from 'meteor/meteor';
import Vendors from './../../lib/api/vendors/collection';

Meteor.publish('vendors.all', function(){
	return Vendors.find();
});