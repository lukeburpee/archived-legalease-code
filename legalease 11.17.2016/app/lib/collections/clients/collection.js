import { Mongo } from 'meteor/mongo';
import { clientSchema } from './../../schema'

const Clients = new Mongo.Collection('clients').attachSchema(clientSchema);

export default Clients