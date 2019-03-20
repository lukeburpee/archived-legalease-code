import { Mongo } from 'meteor/mongo';
import { emailSchema } from './../../schema'

const Emails = new Mongo.Collection('emails').attachSchema(emailSchema);

export default Emails;