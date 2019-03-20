import { Meteor } from 'meteor/meteor';
const Schema = {};

Schema.User = new SimpleSchema({
	username: {
		type: String,
		optional: true
	},
	emails: {
		type: Array,
		optional: true
	},
	'emails.$': {
		type: Object
	},
	'emails.$.address': {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	'emails.$.verified': {
		type: Boolean
	},
	createdAt: {
		type: Date
	},
	services: {
		type: Object,
		optional: true,
		blackbox: true
	},
	roles: {
		type: Object,
		optional: true,
		blackbox: true
	},
	heartbeat: {
		type: Date,
		optional: true
	},
	firstname: {
		type: String,
		optional: true
	},
	middlename: {
		type: String,
		optional: true
	},
	lastname: {
		type: String,
		optional: true
	},
	avatar: {
		type: String,
		optional: true
	},
	type: {
		type: String,
		optional: true
	},
	affiliation: {
		type: String,
		optional: true
	},
	clients: {
		type: Array,
		optional: true
	},
	'clients.$': {
		type: Object
	},
	'clients.$.id': {
		type: String
	},
	'clients.$.role': {
		type: String
	},
	firms: {
		type: Array,
		optional: true
	},
	'firms.$': {
		type: Object
	},
	'firms.$.id': {
		type: String
	},
	'firms.$.role': {
		type: String
	},
	hasCases: {
		type: Boolean,
		optional: true
	},
	hasDiscovery: {
		type: Boolean,
		optional: true
	},
	isUserManager: {
		type: Boolean,
		optional: true
	},
	cases: {
		type: Array,
		optional: true
	},
	'cases.$': {
		type: Object
	},
	matters: {
		type: Array,
		optional: true
	},
	'matters.$': {
		type: Object
	},
	'matters.$.id': {
		type: String
	},
	'matters.$.role': {
		type: String
	},
	'matters.$.permissions': {
		type: Array
	},
	'matters.$.permissions.$': {
		type: Object
	},
	searches: {
		type: Array,
		optional: true
	},
	'searches.$': {
		type: String
	},
	contacts: {
		type: Array,
		optional: true
	},
	'contacts.$': {
		type: String
	},
	isAttorney: {
		type: Boolean,
		optional: true
	},
	barStates: {
		type: Array,
		optional: true
	},
	'barStates.$': {
		type: Object
	},
	'barStates.$.state': {
		type: String
	},
	'barStates.$.barNumber': {
		type: String
	},
	'barStates.$.date': {
		type: Date
	},
	meetings: {
		type: Array,
		optional: true
	},
	'meetings.$': {
		type: String
	},
	timers: {
		type: Array,
		optional:true
	},
	'timers.$': {
		type: String
	},
	chats: {
		type: Array,
		optional: true
	},
	'chats.$': {
		type: String
	}
});

Meteor.users.attachSchema(Schema.User);