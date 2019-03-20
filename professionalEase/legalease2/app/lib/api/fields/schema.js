export default new SimpleSchema({
  label: { type: String, optional:true },
  open: { type: Boolean, optional:true },
  columns: { type: Number, optional:true },
  colSpan: { type: Number, optional:true },
  type: { type: String, allowedValues: ['radio', 'radiolist', 'checkbox', 'checkboxlist', 'select', 'chip', 'text', 'textarea']},
  options: { type: [Object], optional:true },
  'options.$.label': {type:String},
  'options.$.value': {type:String},
  value: { type: [String], blackbox:true, optional:true },
  required: { type: Boolean, optional:true }
});