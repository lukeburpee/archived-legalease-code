import searchSchema from './schema';

const Searches = new Mongo.Collection('searches');
Searches.attachSchema(searchSchema);
export default Searches;
