export default new SimpleSchema({
  name: { type: String },
  index: { type: [Number] },
  createdBy: { type: String },
  clients: { type: [String] },
  firms: { type: [String] },
  matters: { type: [String] },
  fieldType: { type: String, allowedValues: ['radio', 'radio-group', 'checkbox', 'checkbox-group', 'select', 'tag', 'textarea']},
  options: { type: [String] },
  value: { type: [String] },
  defaultValue: { type: String },
  required: { type: Boolean },
  events: { type: [String] }
});