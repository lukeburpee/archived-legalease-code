import { Mongo } from 'meteor/mongo';
import { emailSchema } from './../schema'

export const Emails = new Mongo.Collection('emails').attachSchema(emailSchema);