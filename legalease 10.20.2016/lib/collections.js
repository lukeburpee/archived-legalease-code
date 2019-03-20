import { Mongo } from 'meteor/mongo'

import {
  familySchema,
  fieldSchema,
  formSchema,
  folderSchema,
  searchSchema,
  fileSchema
} from './schema'

const Families = new Mongo.Collection('families').attachSchema(familySchema);
const Fields = new Mongo.Collection('fields').attachSchema(fieldSchema);
const Forms = new Mongo.Collection('forms').attachSchema(formSchema);
const Searches = new Mongo.Collection('searches').attachSchema(searchSchema);
const Files = new Mongo.Collection('files').attachSchema(fileSchema);

export default {
	Families,
	Fields,
	Forms,
	Searches,
	Files
}
