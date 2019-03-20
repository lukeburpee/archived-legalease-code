import { Mongo } from 'meteor/mongo';
import { folderSchema } from './../schema';

export const Folders = new Mongo.Collection('folders').attachSchema(folderSchema);
