import { Mongo } from 'meteor/mongo';
import { formSchema } from './../schema';

export const Forms = new Mongo.Collection('forms').attachSchema(formSchema);
