import { Mongo } from 'meteor/mongo';
import { firmSchema } from './../schema';

export const Firms = new Mongo.Collection('firms').attachSchema(firmSchema);