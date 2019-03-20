import { Mongo } from 'meteor/mongo';
import { matterSchema } from './../../schema'

const Matters = new Mongo.Collection('matters').attachSchema(matterSchema);

export default Matters;