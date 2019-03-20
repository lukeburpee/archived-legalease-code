import { Meteor } from 'meteor/meteor'
import { 
	AccessExternalDatabase, 
	AccessExternalDefaults, 
	AccessExternalCaseFiles, 
	AccessExternalDiscoveryFiles 
} from './../../lib/config/aedb'
import { DiscoveryFiles } from './../../lib/collections'

Meteor.publish('discoveryfiles.default.all', function(){
	return DiscoveryFiles.find().cursor;
});

Meteor.publish('discoveryfiles.default.all.count', function(){
	return DiscoveryFiles.find().count();
})

Meteor.publish('discoveryfiles.default.one.link', function(id){
	return DiscoveryFiles.findOne({_id:id}).link();
});