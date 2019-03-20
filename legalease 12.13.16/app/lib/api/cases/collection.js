import caseSchema from './schema'

const Cases = new Mongo.Collection('cases');
Cases.attachSchema(caseSchema);
export default Cases;

