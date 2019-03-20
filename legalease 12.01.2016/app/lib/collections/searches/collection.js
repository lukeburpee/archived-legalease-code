import { Mongo } from 'meteor/mongo';
import { searchSchema } from './../../schema';

const Searches = new Mongo.Collection('searches').attachSchema(searchSchema);

export default Searches;
