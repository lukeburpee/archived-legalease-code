import { Meteor } from 'meteor/meteor';
import Firms from './../../lib/api/firms/collection';

Meteor.publish('firms.all', function(){
	return Firms.find();
});