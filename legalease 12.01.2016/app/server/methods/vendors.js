import { Meteor } from 'meteor/meteor';
import { Vendors } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'vendors.create': function(data){
			const createdAt = new Date();
			Vendors.insert(data);
		}
	});
};