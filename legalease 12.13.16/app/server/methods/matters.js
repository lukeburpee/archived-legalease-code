import { Meteor } from 'meteor/meteor';
import Matters from './../../lib/api/matters/collection';

export default function () {
	Meteor.methods({
		'matters.create'(data){
			return Matters.insert(data);
		},
		'matters.update'(id, data){
			Matters.update(id, {
				$set: data
			});
		},
		'matters.remove'(id){
			Matters.remove(id);
		}
	});
};