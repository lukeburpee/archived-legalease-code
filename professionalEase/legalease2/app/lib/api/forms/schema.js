import sectionSchema from './../sections/schema'

export default new SimpleSchema({
  label: { type: String },
  matter: { type: String },
  sections: { type: [sectionSchema] }
});