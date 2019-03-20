export default new SimpleSchema({
  filter: { type: String, optional:true },
  operator: {type: String, optional:true, defaultValue:'is', allowedValues:['is', 'is not', 'is like','is not like', 'in', 'is not in', 'is set', 'is not set', 'is greater than', 'is less than', 'is equal to', 'is greater than or equal to', 'is less than or equal to', 'is before', 'is after', 'is between'] },
  value: {type: String, optional: true }
});