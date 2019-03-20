import { Mongo } from 'meteor/mongo';
import { folderSchema } from './../../schema';

const Folders = new Mongo.Collection('folders').attachSchema(folderSchema);

export default Folders;
