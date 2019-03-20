import { Mongo } from 'meteor/mongo';
import { caseSchema } from './../../schema'

const Cases = new Mongo.Collection('cases').attachSchema(caseSchema);

export default Cases;