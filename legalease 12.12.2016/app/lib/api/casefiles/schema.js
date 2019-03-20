const tierSchema = new SimpleSchema({
  name: { type: String }
});

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

const caseFileSchema = _.extend(defaultSchema, {
  type: { type: String, optional: true },
  client: { type: String, optional: true },
  firms: { type: [String], optional: true },
  cases: { type: [String], optional: true },
  court: { type: String, optional: true },
  history: { type: [historySchema], optional: true },
  filings: { type: [String], optional: true },
  markup: { type: [markupSchema], optional: true },
  duplicates: { type: [String], optional: true },
  isDraft: { type: Boolean, optional: true },
  isFiled: { type: Boolean, optional: true },
  tiers: { type: [tierSchema], optional: true },
  isTemplate: { type: Boolean, optional: true },
  derivedTemplate: { type: String, optional: true },
  currentUsers: { type: [String], optional: true }
});

export default new SimpleSchema(caseFileSchema);