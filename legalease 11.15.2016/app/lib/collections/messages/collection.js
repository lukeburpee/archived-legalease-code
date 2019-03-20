import { Mongo } from 'meteor/mongo';
import { chatSchema } from './../../schema'

const Messages = new Mongo.Collection('messages').attachSchema(chatSchema);

export default Messages;