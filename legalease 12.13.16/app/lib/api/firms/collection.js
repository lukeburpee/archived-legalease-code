import firmSchema from './schema';

const Firms = new Mongo.Collection('firms');
Firms.attachSchema(firmSchema);
export default Firms;