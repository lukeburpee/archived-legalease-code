import scheduleSchema from './schema'

const Schedules = new Mongo.Collection('schedules');
Schedules.attachSchema(scheduleSchema);
export default Schedules;