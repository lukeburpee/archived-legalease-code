import fieldSchema from './../fields/schema'

export default new SimpleSchema({
  label: { type: String, optional:true },
  open: { type: Boolean, optional:true},
  editLabel: { type: Boolean, optional:true},
  fields: { type: [fieldSchema], optional:true }
});