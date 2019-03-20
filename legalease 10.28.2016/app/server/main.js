import { Meteor } from 'meteor/meteor';
import initContext from './../lib/config/context'
import './../lib/collections'
import convert from './methods/convert'
import './lib/mongoElasticSync'

convert();


Meteor.startup(() => {
});
