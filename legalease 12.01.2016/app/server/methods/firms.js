import { Meteor } from 'meteor/meteor';
import { Firms } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'firms.create': function(data){
			const createdAt = new Date();
			Firms.insert(data);
		}
	});
};