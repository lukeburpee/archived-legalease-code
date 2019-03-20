import { Mongo } from 'meteor/mongo';
import { timerSchema } from './../../schema'

const Timers = new Mongo.Collection('timers').attachSchema(timerSchema);

export default Timers;