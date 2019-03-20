import searchRuleSchema from './schema';

const SearchRules = new Mongo.Collection('searchrules');
SearchRules.attachSchema(searchRuleSchema);
export default SearchRules;