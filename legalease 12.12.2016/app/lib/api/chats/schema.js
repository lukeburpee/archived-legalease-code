export default new SimpleSchema({
  dateStart: { type: Date },
  active: { type: Boolean },
  lastUpdate: { type: Date },
  creator: { type: String },
  users: { type: [String] },
  history: { type: [Object] },
  'history.$.user': { type: String },
  'history.$.timestamp': { type: Date },
  'history.$.index': { type: Number },
  'history.$.text': { type: String }
});