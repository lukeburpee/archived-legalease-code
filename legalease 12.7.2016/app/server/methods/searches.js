import { Meteor } from 'meteor/meteor';
import { Searches } from './../../lib/collections';

export default function () {
	Meteor.methods({
		'searches.create': function(data){
			Searches.insert(data);
		},
		'searches.update': function(id, data){
			Searches.update(id, {
				$set: data
			});
		},
		'searches.update.locked': function(id, isLocked){
			Searches.update(id, {
				$set: { locked: isLocked }
			});
		},
		'searches.update.private': function(id, isPrivate){
			Searches.update(id, {
				$set: { private: isPrivate }
			});
		},
		'searches.update.rename': function(id, rename){
			Searches.update(id, {
				$set: { name: rename }
			});
		},
		'searches.update.parent': function(id, parentId){
			Searches.update(id, {
				$set: { parent: parentId }
			});
		},
		'searches.update.filters': function(id, filters){
			Searches.update(id, {
				$set: { filters: filters }
			});
		}
	});
};