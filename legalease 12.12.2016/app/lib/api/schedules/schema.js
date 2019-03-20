export default new SimpleSchema({
  user: { type: String },
  private: { type: Boolean },
  type: { type: String },
  createdBy: { type: String }, 
  createdDate: { type: Date },
  time: { type: String },
  invitees: { type: [String] },
  startTime: { type: Date },
  endTime: { type: Date }
});