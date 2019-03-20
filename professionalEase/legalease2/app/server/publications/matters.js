import { Meteor } from 'meteor/meteor'
import Matters from './../../lib/api/matters/collection'
import Searches from './../../lib/api/searches/collection'
import Forms from './../../lib/api/forms/collection'

Meteor.publish('matter.searches.list', function(matterId){
	return Searches.find({matter:matterId});
});

Meteor.publish('matters.forms.list', function(matterId){
	return Forms.find({matter:matterId});
});