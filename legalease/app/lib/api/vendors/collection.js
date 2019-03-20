import vendorSchema from './schema';

const Vendors = new Mongo.Collection('vendors');
Vendors.attachSchema(vendorSchema);
export default Vendors;