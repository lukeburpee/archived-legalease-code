import { Meteor } from 'meteor/meteor';
import Cases from './../../lib/api/cases/collection';

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