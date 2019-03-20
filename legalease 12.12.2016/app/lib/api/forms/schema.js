import fieldSchema from './../fields/schema'

export default new SimpleSchema({
  name: { type: String },
  fields: { type: [fieldSchema] }
});