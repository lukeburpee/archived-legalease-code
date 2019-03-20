import { Meteor } from 'meteor/meteor'
import DiscoveryFiles from './../../lib/api/discoveryfiles/collection'

Meteor.publish('discoveryfiles.default.all', function(){
	return DiscoveryFiles.find().cursor;
});

Meteor.publish('discoveryfiles.default.all.count', function(){
	return DiscoveryFiles.find().count();
})

Meteor.publish('discoveryfiles.default.one.link', function(id){
	return DiscoveryFiles.findOne({_id:id}).link();
});