import searchGroupSchema from './../searchgroups/schema';

export default new SimpleSchema({
  name: { type: String },
  includeFamily: { type: Boolean, defaultValue:false },
  includeDuplicates: { type: Boolean, defaultValue:false },
  includeNearDuplicates: { type: Boolean, defaultValue:false },
  createdBy: { type: String },
  parent: { type: String },
  private: { type: Boolean },
  searchGroups: { type: [searchGroupSchema] },
  columns: { type: [String] },
  isCached: { type: Boolean },
  files: { type: [String] },
  sort: { type: Object }
});