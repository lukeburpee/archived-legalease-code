import emailSchema from './schema'

const Emails = new Mongo.Collection('emails');
Emails.attachSchema(emailSchema);
export default Emails;
