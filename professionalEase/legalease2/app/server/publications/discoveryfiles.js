import { Meteor } from 'meteor/meteor'
import DiscoveryFiles from './../../lib/api/discoveryfiles/collection'

Meteor.publish('discoveryfiles.default.all', () => {
	return DiscoveryFiles.find().cursor;
});

Meteor.publish('discoveryfiles.default.all.count', () => {
	return DiscoveryFiles.find().count();
})

Meteor.publish('discoveryfiles.default.one.link', (id) => {
	return DiscoveryFiles.findOne({_id:id}).link();
});

Meteor.publish('discoveryfiles.default.collection', (collection) => {
	return DiscoveryFiles.find({collection:collection}).cursor;
});

Meteor.publish('discoveryfiles.default.search', (collection, search) => {
	return DiscoveryFiles.find({...collection, ...search}).cursor;
});