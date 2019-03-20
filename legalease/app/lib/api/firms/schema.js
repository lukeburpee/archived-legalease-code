export default new SimpleSchema({
  name: { type: String },
  clients: { type: [String] },
  cases: { type: [String] },
  matters: { type: [String] },
  partners: { type: [String] },
  seniorAssociates: { type: [String], optional: true },
  associates: { type: [String], optional: true },
  caseManagers: { type: [String], optional: true },
  discoveryManagers: { type: [String], optional: true },
  discoveryReviewers: { type: [String], optional: true }
});