export default new SimpleSchema({
  name: { type: String },
  type: { type: String },
  parties: { type: [String] },
  courts: { type: [String] },
  regulatoryAgencies: { type: [String]},
  firms: { type: [String] },
  workflow: { type: String },
  progress: { type: String },
  matters: { type: [String] },
});