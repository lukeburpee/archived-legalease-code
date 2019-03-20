import { Mongo } from 'meteor/mongo';
import { fieldSchema } from './../schema';

export const Fields = new Mongo.Collection('fields').attachSchema(fieldSchema);
