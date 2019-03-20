import formSchema from './schema';

const Forms = new Mongo.Collection('forms');
Forms.attachSchema(formSchema);
export default Forms;
