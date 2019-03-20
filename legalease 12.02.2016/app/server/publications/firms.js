import { Meteor } from 'meteor/meteor';
import { Firms } from './../../lib/collections';

Meteor.publish('firms.all', function(){
	return Firms.find();
});