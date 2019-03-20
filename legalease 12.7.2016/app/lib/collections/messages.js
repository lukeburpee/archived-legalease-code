import { Mongo } from 'meteor/mongo';
import { chatSchema } from './../schema'

export const Messages = new Mongo.Collection('messages').attachSchema(chatSchema);