import { Meteor } from 'meteor/meteor';
import { Cases } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'cases.create': function(data){
			const createdAt = new Date();
			Cases.insert(data);
		}
	});
};