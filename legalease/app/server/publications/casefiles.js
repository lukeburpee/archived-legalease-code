import { Meteor } from 'meteor/meteor';
import CaseFiles from './../../lib/api/casefiles/collection';

Meteor.publish('casefiles.default.all', function(){
	return CaseFiles.find().cursor;
});