import { Meteor } from 'meteor/meteor';
import { Cases } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'cases.create'(data){
			Cases.insert(data);
		},
		'cases.update'(id, data){
			Cases.update(id, {
				$set: data
			});
		},
		'cases.remove'(id){
			Cases.remove(id);
		}
	});
};