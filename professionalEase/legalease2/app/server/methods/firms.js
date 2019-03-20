import { Meteor } from 'meteor/meteor';
import Firms from './../../lib/api/firms/collection';

export default function () {
	Meteor.methods({
		'firms.create': function(data){
			Firms.insert(data);
		},
		'firms.update': function(id, data){
			Firms.update(id, {
				$set: data
			});
		}
	});
};