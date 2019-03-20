import fieldSchema from './schema';

const Fields = new Mongo.Collection('fields');
Fields.attachSchema(fieldSchema);
export default Fields;
