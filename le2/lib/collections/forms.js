import { Mongo } from 'meteor/mongo';

const Forms = new Mongo.Collection('forms');

const Schema = {};

Schema.Forms = new SimpleSchema({
	name: {type:String},
	creator: {type:String},
	matter: {type:String},
	firm: {type:String},
	client: {type:String},
	history: {type: [Object]},
	'history.$.user': {
		type: String
	},
	'history.$.type': {
		type: String
	},
	'history.$.date': {
		type: Date
	},
	fields: {type: [Object]},
	'fields.$.name': {
		type: String
	},
	'fields.$.type': {
		type: String
	},
	'fields.$.label': {
		type: String
	},
	'fields.$.required': {
		type: Boolean
	},
	'fields.$.options': {
		type: [Object],
		optional: true
	},
	'fields.$.events': {
		type: [Object]
	}
});