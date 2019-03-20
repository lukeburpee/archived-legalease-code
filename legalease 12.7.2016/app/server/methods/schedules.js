import { Meteor } from 'meteor/meteor';
import { Schedules } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'schedules.create': function(data){
			const createdAt = new Date();
			Schedules.insert(data);
		}
	});
};