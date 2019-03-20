import searchGroupSchema from './schema';

const SearchGroups = new Mongo.Collection('searchgroups');
SearchGroups.attachSchema(searchGroupSchema);
export default SearchGroups;