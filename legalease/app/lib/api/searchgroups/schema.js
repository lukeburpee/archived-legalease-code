import searchRuleSchema from './../searchrules/schema';

export default new SimpleSchema({
  combinator: { type:String, defaultValue:'and', allowedValues:['and', 'or'] },
  groups: {type: [Object]},
  'groups.$.combinator':{type:String, optional:true},
  'groups.$.rules':{type: [searchRuleSchema]},
  'groups.$.groups':{type:[Object]},
  rules: {type: [searchRuleSchema]}
});