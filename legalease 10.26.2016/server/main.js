import { Meteor } from 'meteor/meteor';
import initContext from './../lib/config/context'
import './../lib/collections'
import convert from './methods/convert'

convert()

Meteor.startup(() => {
  // code to run on server at startup
});
