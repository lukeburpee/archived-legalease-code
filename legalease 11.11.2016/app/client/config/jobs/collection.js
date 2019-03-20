import { JobCollection } from 'meteor/vsivsi:job-collection';

const ConvertHTMLJobs = new JobCollection('convertHtmlQueue');
const ConvertPDFJobs = new JobCollection('convertPdfQueue');
const ExtractMetaJobs = new JobCollection('extractMetaQueue');
const ExtractTextJobs = new JobCollection('extractTextQueue');

export default {
	ConvertHTMLJobs,
	ConvertPDFJobs,
	ExtractMetaJobs,
	ExtractTextJobs
}