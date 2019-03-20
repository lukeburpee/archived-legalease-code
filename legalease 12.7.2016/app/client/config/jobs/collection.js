import { JobCollection } from 'meteor/vsivsi:job-collection';

const DiscoveryJobs = new JobCollection('discoveryJobsQueue');

export default DiscoveryJobs;
