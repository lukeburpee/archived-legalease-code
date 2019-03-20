import { Mongo } from 'meteor/mongo';
import { matterSchema } from './../schema'

export const Matters = new Mongo.Collection('matters');