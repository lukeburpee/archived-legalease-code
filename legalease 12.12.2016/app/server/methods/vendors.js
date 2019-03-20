import { Meteor } from 'meteor/meteor';
import Vendors from './../../lib/api/vendors/collection';

export default function () {
	Meteor.methods({
		'vendors.create': function(data){
			const createdAt = new Date();
			Vendors.insert(data);
		}
	});
};