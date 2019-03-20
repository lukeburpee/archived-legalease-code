import clientSchema from './schema'

const Clients = new Mongo.Collection('clients');
Clients.attachSchema(clientSchema);
export default Clients;

