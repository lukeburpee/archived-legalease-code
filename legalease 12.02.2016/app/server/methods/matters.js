import { Meteor } from 'meteor/meteor';
import { Matters } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'matters.create': function(data){
			const createdAt = new Date();
			Matters.insert(data);
		}
	});
};