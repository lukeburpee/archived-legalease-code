import { Mongo } from 'meteor/mongo';
import { formSchema } from './../../schema';

const Forms = new Mongo.Collection('forms').attachSchema(formSchema);

export default Forms;
