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

Schema.fileSchema = _.extend(defaultSchema, {
  custodians: { type: [String] },
  family : { type: [Schema.familySchema], optional: true },
  history: { type: [Schema.historySchema], optional: true },
  productions: { type: [Schema.productionSchema], optional: true },
  markup: { type: [Schema.markupSchema], optional: true },
  duplicates: { type: [String], optional: true },
  isTiered: { type: Boolean, defaultValue: false },
  tiers: { type: [Schema.tierSchema], optional: true },
  forms: { type: [Schema.formSchema], optional: true }
});

export default Schema;