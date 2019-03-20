import { Meteor } from 'meteor/meteor';
import Clients from './../../lib/api/clients/collection';

export default function () {
	Meteor.methods({
		'clients.create'(data){
			let client = Clients.insert(data);
			return client._id
		},
		'clients.update'(id, data){
			Clients.update(id, {
				$set: data
			});
		},
		'clients.remove'(id){
			Clients.remove(id);
		}
	});
};