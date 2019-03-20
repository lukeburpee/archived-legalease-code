import { Mongo } from 'meteor/mongo';
import { caseSchema } from './../schema'

export const Cases = new Mongo.Collection('cases').attachSchema(caseSchema);