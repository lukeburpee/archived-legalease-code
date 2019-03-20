import timerSchema from './schema'

const Timers = new Mongo.Collection('timers');
Timers.attachSchema(timerSchema);
export default Timers;