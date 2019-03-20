import { Meteor } from 'meteor/meteor';
import { CaseFiles } from './../../lib/collections';

Meteor.publish('casefiles.default.all', function(){
	return CaseFiles.find().cursor;
});