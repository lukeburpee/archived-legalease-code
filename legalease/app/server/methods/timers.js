import { Meteor } from 'meteor/meteor';
import Timers from './../../lib/api/timers/collection';

export default function () {
	Meteor.methods({
		'timers.create': function(data){
			Timers.insert(data);
		},
		'timers.update': function(id, data){
			Timers.update(id, {
				$set: data
			});
		}
	});
};