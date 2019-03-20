import { Mongo } from 'meteor/mongo';
import { scheduleSchema } from './../../schema'

const Schedules = new Mongo.Collection('schedules').attachSchema(scheduleSchema);

export default Schedules;