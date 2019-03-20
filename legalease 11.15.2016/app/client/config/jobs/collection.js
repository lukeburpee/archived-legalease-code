import { JobCollection } from 'meteor/vsivsi:job-collection';

export const ConvertHTMLJobs = new JobCollection('convertHtmlQueue');
export const ConvertPDFJobs = new JobCollection('convertPdfQueue');
export const ExtractMetaJobs = new JobCollection('extractMetaQueue');
export const ExtractTextJobs = new JobCollection('extractTextQueue');