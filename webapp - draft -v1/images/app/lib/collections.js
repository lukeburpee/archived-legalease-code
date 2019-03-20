import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export default const Document = new Mongo.Collection('default');

DocumentSchema = new SimpleSchema({
	'ecm:id': {
		type: String
	},
	'ecm:parentId': {
		type: String
	},
	'ecm:primaryType': {
		type: String
	},
	'ecm:name': {
		type: String
	},
	'ecm:lifeCyclePolicy': {
		type: String
	},
	'ecm:lifeCycleState': {
		type: String
	},
	'ecm:majorVersion': {
		type: Number
	},
	'ecm:minorVersion': {
		type: Number
	},
	'ecm:acp': {
		type: [Object]
	},
	'ecm:acp.$.name': {
		type: String
	},
	'ecm:acp.$.acl': {
		type: [Object]
	},
	'ecm:acp.$.acl.$.grant': {
		type: Boolean
	},
	'ecm:acp.$.acl.$.perm': {
		type: String
	},
	'ecm:acp.$.acl.$.user': {
		type: String
	},
	'ecm:ancestorIds': {
		type: [String]
	},
	'ecm:racl': {
		type: [String]
	},
	'ecm:fulltextSimple': {
		type: String
	},
	'ecm:fulltextBinary': {
		type: String
	},
	'icon': {
		type: String
	},
	'dc:title': {
		type: String
	},
	'dc:description': {
		type: String
	},
	'dc:created': {
		type: Date
	},
	'dc:creator': {
		type: String
	},
	'dc:modified': {
		type: Date
	},
	'dc:lastContributor': {
		type: String
	},
	'dc:contributors': {
		type: [String]
	},
	'my:attachedFile': {
		type: Object
	},
	'my:attachedFile.vignettes': {
		type: Array
	},
	'my:attachedFile.vignettes.$.content': {
		type: Object
	},
	'my:attachedFile.vignettes.$.content.length': {
		type: Number
	},
	'my:attachedFile.vignettes.$.content.data': {
		type: String
	},
	'my:attachedFile.vignettes.$.content.mime-type': {
		type: String
	},
	'my:attachedFile.vignettes.$.content.name': {
		type: String
	},
	'my:attachedFile.vignettes.$.height': {
		type: Number
	},
	'my:attachedFile.vignettes.$.width': {
		type: Number
	},
	'my:attachedFile.vignettes.$.label': {
		type: String
	}
});