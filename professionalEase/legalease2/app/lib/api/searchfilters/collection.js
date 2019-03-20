import searchFilterSchema from './schema';

const SearchFilters = new Mongo.Collection('searchfilters');
SearchFilters.attachSchema(searchFilterSchema);
export default SearchFilters;