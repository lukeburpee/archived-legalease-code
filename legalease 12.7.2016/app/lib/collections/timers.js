import { Mongo } from 'meteor/mongo';
import { timerSchema } from './../schema'

export const Timers = new Mongo.Collection('timers').attachSchema(timerSchema);