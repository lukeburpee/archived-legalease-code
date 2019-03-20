export default new SimpleSchema({
  user: { type: String },
  matter: { type: String },
  description: { type: String },
  time: { type: [Object] },
  'time.$.start': { type: Date },
  'time.$.finish': { type: Date }
});