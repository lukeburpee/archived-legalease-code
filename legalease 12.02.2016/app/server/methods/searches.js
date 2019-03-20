import { Meteor } from 'meteor/meteor';
import { Searches } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'searches.create': function(data){
			const createdAt = new Date();
			Searches.insert(data);
		}
	});
};