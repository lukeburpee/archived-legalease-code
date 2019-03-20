import { Mongo } from 'meteor/mongo'
import { SimpleSchema }  from 'meteor/aldeed:simple-schema'

let Schema = {};

Schema.tierSchema = new SimpleSchema({
  name: { type: String }
});

Schema.familySchema = new SimpleSchema({
  parent: {type:String},
  members: {type: [String]}
});

Schema.fieldSchema = new SimpleSchema({
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

Schema.formSchema = new SimpleSchema({
  name: { type: String },
  fields: { type: [Schema.fieldSchema] }
});

Schema.historySchema = new SimpleSchema({
  user: {type:String},
  time: {type:Date},
  action: {type:String, allowedValues: ['uploaded', 'viewed', 'converted', 'form-update', 'produced', 'markup-update']}
});

Schema.productionSchema = new SimpleSchema({
  prefix: {type:String},
  bates: {type:String}
});

Schema.markupSchema = new SimpleSchema({
  set: {type:String},
  user: {type:String},
  time: {type:Date},
  page: {type:Number},
  origin: {type: [Number]},
  end: {type: [Number]}
});

Schema.folderSchema = new SimpleSchema({
  name: { type: String },
  createdBy: { type: String },
  isLocked: { type: Boolean },
  depth: { type: Number },
  hasChildren: { type: Boolean },
  children: { type: Number }
});

Schema.searchSchema = new SimpleSchema({
  name: { type: String },
  includeFamily: { type: Boolean },
  includeDuplicates: { type: Boolean },
  includeNearDuplicates: { type: Boolean },
  createdBy: { type: String },
  folder: { type: String },
  private: { type: Boolean },
  criteria: { type: Object },
  'criteria.text': { type: String },
  'criteria.filters': { type: Object },
  columns: { type: [String] },
  isCached: { type: Boolean },
  files: { type: [String] },
  sort: { type: Object }
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

Schema.caseFileSchema = _.extend(defaultSchema, {
  type: { type: String, optional: true },
  client: { type: String, optional: true },
  firms: { type: [String], optional: true },
  cases: { type: [String], optional: true },
  court: { type: String, optional: true },
  history: { type: [Schema.historySchema], optional: true },
  filings: { type: [String], optional: true },
  markup: { type: [Schema.markupSchema], optional: true },
  duplicates: { type: [String], optional: true },
  isDraft: { type: Boolean, optional: true },
  isFiled: { type: Boolean, optional: true },
  tiers: { type: [Schema.tierSchema], optional: true },
  isTemplate: { type: Boolean, optional: true },
  derivedTemplate: { type: String, optional: true },
  currentUsers: { type: [String], optional: true }
});

var extendedDiscoveryFileSchema = _.extend(defaultSchema, {
    custodians: { type: [String], optional: true },
    family : { type: [Schema.familySchema], optional: true },
    history: { type: [Schema.historySchema], optional: true },
    productions: { type: [Schema.productionSchema], optional: true },
    markup: { type: [Schema.markupSchema], optional: true },
    duplicates: { type: [String], optional: true },
    isTiered: { type: Boolean, defaultValue: false, optional: true },
    tiers: { type: [Schema.tierSchema], optional: true },
    forms: { type: [Schema.formSchema], optional: true },
    currentUsers: { type: [String], optional: true }
});

Schema.DiscoveryFileSchema = new SimpleSchema(extendedDiscoveryFileSchema);

Schema.emailSchema = new SimpleSchema({
  date: { type: Date },
  thread: { type: [String] },
  threadIndex: { type: [Number] },
  from: { type: String },
  to: { type: [String] },
  cc: { type: [String] },
  bcc: { type: [String] },
  attachments: { type: [String] },
  body: { type: String },
  legend: { type: String }
});

Schema.chatSchema = new SimpleSchema({
  dateStart: { type: Date },
  active: { type: Boolean },
  lastUpdate: { type: Date },
  creator: { type: String },
  users: { type: [String] },
  history: { type: [Object] },
  'history.$.user': { type: String },
  'history.$.timestamp': { type: Date },
  'history.$.index': { type: Number },
  'history.$.text': { type: String }
});

Schema.timerSchema = new SimpleSchema({
  user: { type: String },
  matter: { type: String },
  description: { type: String },
  time: { type: [Object] },
  'time.$.start': { type: Date },
  'time.$.finish': { type: Date }
});

Schema.scheduleSchema = new SimpleSchema({
  user: { type: String },
  private: { type: Boolean },
  type: { type: String },
  createdBy: { type: String }, 
  createdDate: { type: Date },
  time: { type: String },
  invitees: { type: [String] },
  startTime: { type: Date },
  endTime: { type: Date }
});

Schema.matterSchema = new SimpleSchema({
  name: { type: String },
  court: { type: String },
  description: { type: String },
  client: { type: String }
});

Schema.caseSchema = new SimpleSchema({
  name: { type: String },
  type: { type: String },
  parties: { type: [String] },
  courts: { type: [String] },
  regulatoryAgencies: { type: [String]},
  firms: { type: [String] },
  workflow: { type: String },
  progress: { type: String },
  matters: { type: [String] },
});

Schema.clientSchema = new SimpleSchema({
  name: { type: String },
  firms: { type: [String] },
  cases: { type: [String] },
  matters: { type: [String] },
  administrators: { type: [String] },
  users: { type: [String], optional: true }
});

Schema.firmSchema = new SimpleSchema({
  name: { type: String },
  clients: { type: [String] },
  cases: { type: [String] },
  matters: { type: [String] },
  partners: { type: [String] },
  seniorAssociates: { type: [String], optional: true },
  associates: { type: [String], optional: true },
  caseManagers: { type: [String], optional: true },
  discoveryManagers: { type: [String], optional: true },
  discoveryReviewers: { type: [String], optional: true }
});

Schema.vendorSchema = new SimpleSchema({
  name: { type: String },
  clients: { type: [String] },
  cases: { type: [String] },
  matters: { type: [String] },
  caseManagers: { type: [String], optional: true},
  discoveryManagers: { type: [String], optional: true},
});

export default Schema;