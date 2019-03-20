import { Mongo } from 'meteor/mongo';
import { firmSchema } from './../../schema';

const Firms = new Mongo.Collection('firms').attachSchema(firmSchema);

export default Firms;