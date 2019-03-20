export default new SimpleSchema({
  name: { type: String },
  clients: { type: [String] },
  cases: { type: [String] },
  matters: { type: [String] },
  caseManagers: { type: [String], optional: true},
  discoveryManagers: { type: [String], optional: true},
});