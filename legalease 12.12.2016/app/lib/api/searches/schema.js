export default new SimpleSchema({
  name: { type: String },
  includeFamily: { type: Boolean },
  includeDuplicates: { type: Boolean },
  includeNearDuplicates: { type: Boolean },
  createdBy: { type: String },
  folder: { type: String },
  private: { type: Boolean },
  criteria: { type: Object },
  'criteria.text': { type: String },
  'criteria.filters': { type: Object },
  columns: { type: [String] },
  isCached: { type: Boolean },
  files: { type: [String] },
  sort: { type: Object }
});