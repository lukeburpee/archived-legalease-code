import { Mongo } from 'meteor/mongo';
import matterSchema from './schema'

const Matters = new Mongo.Collection('matters');
Matters.attachSchema(matterSchema);
export default Matters;