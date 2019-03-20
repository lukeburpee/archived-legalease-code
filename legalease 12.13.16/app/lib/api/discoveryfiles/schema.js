import formSchema from './../forms/schema';

const defaultSchema = {
  size: {
    type: Number
  },
  name: {
    type: String
  },
  type: {
    type: String
  },
  path: {
    type: String
  },
  isVideo: {
    type: Boolean
  },
  isAudio: {
    type: Boolean
  },
  isImage: {
    type: Boolean
  },
  isText: {
    type: Boolean
  },
  isJSON: {
    type: Boolean
  },
  isPDF: {
    type: Boolean
  },
  extension: {
    type: String,
    optional: true
  },
  _storagePath: {
    type: String
  },
  _downloadRoute: {
    type: String
  },
  _collectionName: {
    type: String
  },
  public: {
    type: Boolean,
    optional: true
  },
  meta: {
    type: Object,
    blackbox: true,
    optional: true
  },
  userId: {
    type: String,
    optional: true
  },
  updatedAt: {
    type: Date,
    optional: true
  },
  versions: {
    type: Object,
    blackbox: true
  }
};

const historySchema = new SimpleSchema({
  user: {type:String},
  time: {type:Date},
  action: {type:String, allowedValues: ['uploaded', 'viewed', 'converted', 'form-update', 'produced', 'markup-update']}
});

const markupSchema = new SimpleSchema({
  set: {type:String},
  user: {type:String},
  time: {type:Date},
  page: {type:Number},
  origin: {type: Array},
  'origin.$': {type: Number},
  end: {type: Array},
  'end.$': {type: Number}
});

const tierSchema = new SimpleSchema({
  name: { type: String }
});

const familySchema = new SimpleSchema({
  familyId: { type: String },
  members: { type: Array },
  'members.$': { type: String }
});

const productionSchema = new SimpleSchema({
  productionId: { type: String },
  prefix: { type: String },
  batesId: { type: String }
});

var discoveryFileSchema = _.extend(defaultSchema, {
    custodians: { type: [String], optional: true },
    family : { type: [familySchema], optional: true },
    history: { type: [historySchema], optional: true },
    productions: { type: [productionSchema], optional: true },
    markup: { type: [markupSchema], optional: true },
    duplicates: { type: [String], optional: true },
    isTiered: { type: Boolean, defaultValue: false, optional: true },
    tiers: { type: [tierSchema], optional: true },
    forms: { type: [formSchema], optional: true },
    currentUsers: { type: [String], optional: true }
});

export default new SimpleSchema(discoveryFileSchema);