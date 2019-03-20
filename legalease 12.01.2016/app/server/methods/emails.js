import { Meteor } from 'meteor/meteor';
import { Emails } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'emails.create': function(data){
			const createdAt = new Date();
			Emails.insert(data);
		}
	});
};