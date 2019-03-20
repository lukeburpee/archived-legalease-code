import { Meteor } from 'meteor/meteor';
import * as Collections from './../lib/collections'
import convert from './methods/convert'
import discoveryfiles from './methods/discoveryfiles';
//import './lib/mongoElasticSync'
convert();
discoveryfiles();
process.env.MONGO_URL = "mongodb://mongo1:27017,mongo2:27019,mongo3:27021/app?replicaSet=appRS"
Meteor.startup(() => {
	Meteor.publish('allPdfConversionJobs', function(){
		return Collections.PDFConversionQueue.find({});
	});
	Meteor.publish('allHtmlConversionJobs', function(){
		return Collections.HTMLConversionQueue.find({});
	})
	return Collections.PDFConversionQueue.startJobServer(), Collections.HTMLConversionQueue.startJobServer()
});
