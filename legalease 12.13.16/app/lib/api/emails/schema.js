export default new SimpleSchema({
  date: { type: Date },
  thread: { type: [String] },
  threadIndex: { type: [Number] },
  from: { type: String },
  to: { type: [String] },
  cc: { type: [String] },
  bcc: { type: [String] },
  attachments: { type: [String] },
  body: { type: String },
  legend: { type: String }
});