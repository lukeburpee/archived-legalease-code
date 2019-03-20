export default new SimpleSchema({
	companyName:{type:String, optional:true},
	type:{type:String, optional:true},
  firms: { type: Array, optional:true },
  'firms.$':{type:String, optional:true},
  cases: { type: Array,optional:true },
  'cases.$':{type:String, optional:true},
  matters: { type: Array,optional:true },
  'matters.$':{type:String, optional:true},
  administrators: { type: Array,optional:true },
  'administrators.$':{type:String, optional:true},
  users: { type: Array, optional: true },
  'users.$':{type:String, optional:true},
  pointOfContact: { type: Object, optional:true},
  'pointOfContact.firstname': { type: String, optional:true},
  'pointOfContact.middlename': {type: String, optional:true},
  'pointOfContact.lastname':{type:String, optional:true},
  'pointOfContact.address':{type:String, optional:true},
  'pointOfContact.city':{type:String, optional:true},
  'pointOfContact.state':{type:String, optional:true},
  'pointOfContact.zip':{type:String, optional:true},
  'pointOfContact.phone':{type:String, optional:true},
  'pointOfContact.email':{type:String, optional:true}
});