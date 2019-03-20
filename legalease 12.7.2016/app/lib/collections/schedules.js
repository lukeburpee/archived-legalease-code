import { Mongo } from 'meteor/mongo';
import { scheduleSchema } from './../schema'

export const Schedules = new Mongo.Collection('schedules').attachSchema(scheduleSchema);