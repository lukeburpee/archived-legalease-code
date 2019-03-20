import { Meteor } from 'meteor/meteor';
import { Clients } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'clients.create': function(data){
			const createdAt = new Date();
			Clients.insert(data);
		}
	});
};