import { Mongo } from 'meteor/mongo';
import { fieldSchema } from './../../schema';

const Fields = new Mongo.Collection('fields').attachSchema(fieldSchema);

export default Fields;
