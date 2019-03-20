import { Meteor } from 'meteor/meteor';
import { JobCollection } from 'meteor/vsivsi:job-collection';

const DiscoveryJobs = new JobCollection('discoveryJobsQueue');

if (Meteor.isServer){
	DiscoveryJobs.allow({
		admin: function(userId, method, params){
			return true;
		}
	});
};

export default DiscoveryJobs;