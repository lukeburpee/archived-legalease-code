import { Meteor } from 'meteor/meteor';
import * as Collections from './../lib/collections'
import convert from './methods/convert'
import discoveryfiles from './methods/discoveryfiles';
//import './lib/mongoElasticSync'
convert();
discoveryfiles();
Meteor.startup(() => {
});
