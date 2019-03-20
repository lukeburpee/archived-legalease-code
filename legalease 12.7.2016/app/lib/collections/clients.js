import { Mongo } from 'meteor/mongo';
import { clientSchema } from './../schema'

export const Clients = new Mongo.Collection('clients');