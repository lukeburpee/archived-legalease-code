import { Meteor } from 'meteor/meteor';
import { Timers } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'timers.create': function(data){
			const createdAt = new Date();
			Timers.insert(data);
		}
	});
};