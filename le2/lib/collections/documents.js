import { Mongo } from 'meteor/mongo';

const Documents = new Mongo.Collection("default");

let Schema = {};

const DocumentContentSchema = new SimpleSchema({
	"length": 						{type:Number},
	"data": 						{type:String},
	"mime-type": 					{type:String},
	"name": 						{type:String}
});

const VignettesSchema = new SimpleSchema({
	"content": 						{type: DocumentContentSchema},
	"height": 						{type:Number},
	"width": 						{type:Number},
	"label": 						{type:String}
});

const AttachedFileSchema = new SimpleSchema({
	"vignettes": 					{type: [VignettesSchema]},
	"name": 						{type:String}
});

const AclSchema = new SimpleSchema({
	"grant": 						{type: Boolean},
	"perm": 						{type: String},
	"user": 						{type: String}
});

const AcpSchema = new SimpleSchema({
	"name": 						{type: String},
	"acl": 							{type: [AclSchema]}
});

Schema.Documents = new SimpleSchema({
    "_id": 							{type:Mongo.ObjectID()},
    "ecm:": 						{type:String},
    "ecm:id": 						{type:String},
    "ecm:__path": 					{type:String},
    "ecm:parentId": 				{type:String},
    "ecm:primaryType": 				{type:String},
    "ecm:mixinTypes": 				{type:String},
    "ecm:name" : 					{type:String},
    "ecm:lifeCyclePolicy": 			{type:String},
    "ecm:lifeCycleState": 			{type:String},
    "ecm:majorVersion": 			{type:Number},
    "ecm:minorVersion": 			{type:Number},
    "ecm:acp": 						{type: [AcpSchema]},
    "ecm:ancestorIds": 				{type:[String]},
    "ecm:racl": 					{type:[String]},
    "ecm:isCheckedIn": 				{type:Boolean},
    "ecm:isVersion": 				{type:Boolean},
    "ecm:isLatestVersion": 			{type:Boolean},
    "ecm:isLatestMajorVersion": 	{type:Boolean},
    "ecm:isLatestMinorVersion": 	{type:Boolean},
    "ecm:versionSeriesId": 			{type:String},
    "ecm:versionCreated": 			{type:String},
    "ecm:versionLabel": 			{type:String},
    "ecm:versionDescription": 		{type:String},
    "ecm:baseVersionId": 			{type:String},
    "ecm:isProxy": 					{type:Boolean},
    "ecm:proxyTargetId": 			{type:String},
    "ecm:proxyVersionSeriesId": 	{type:String},
    "ecm:proxyIds": 				{type:[String]},
    "ecm:lifeCyclePolicy": 			{type:String},
    "ecm:lifeCycleState": 			{type:String},
    "ecm:lockOwner": 				{type:String},
    "ecm:lockCreated":  			{type:Boolean},
    "ecm:fulltextSimple": 			{type:String},
    "ecm:fulltextBinary": 			{type:String},
    "fullTextSimple": 				{type:String},
    "fullTextBinary": 				{type:String},
    "fullTextJobId": 				{type:String},
    "icon": 						{type:String},
    "dc:subjects": 					{type:[String]},
    "dc:format": 					{type:String},
    "dc:language": 					{type:String},
    "dc:title": 					{type:String},
    "dc:description": 				{type:String},
    "dc:created": 					{type:Date},
    "dc:creator": 					{type:String},
    "dc:modified": 					{type:Date},
    "dc:lastContributor": 			{type:String},
    "dc:contributors": 				{type:[String]},
    "my:attachedFile": 				{type: AttachedFileSchema},
    "facets": 						{type: [String]}
});

Documents.attachSchema(Schema.Documents);

export default Documents;