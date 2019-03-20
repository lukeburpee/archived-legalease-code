import { Mongo } from 'meteor/mongo';
import { searchSchema } from './../schema';

export const Searches = new Mongo.Collection('searches').attachSchema(searchSchema);
