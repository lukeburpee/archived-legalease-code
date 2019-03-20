import DiscoveryJobs from './../api/jobs/collection';

export const createJobs = (file) => {
  console.log(file);
  if (file.meta.convertPdf){
    createPdfConvertJob(file);
  }
  if (file.meta.convertHtml){
    createHtmlConvertJob(file);
  }
  if (file.meta.extractText){
    createTextExtractJob(file);
  }
  if (file.meta.extractMeta){
    createMetaExtractJob(file);
  }
  if (file.meta.extractPst){
    createPstExtractJob(file);
  }
}

const createTextExtractJob = (file) => {
  const extractTextJob = new Job(DiscoveryJobs, 'extractText',{
    _id:file._id,
    name:file.name,
    type:file.type,
    annotateText: file.meta.annotateText,
    translate: file.meta.translate,
    allowLSA: file.meta.allowLSA,
    createCorpus: file.meta.createCorpus,
    semanticAnalysis: file.meta.semanticAnalysis,
    database: file.meta.database
  });
  extractTextJob.priority('normal')
  extractTextJob.retry({retries:50, wait:100*1000})
  extractTextJob.save();
}

const createMetaExtractJob = (file) => {
  const extractMetaJob = new Job(DiscoveryJobs, 'extractMeta',{
    _id:file._id,name: file.name,
    type:file.type,
    database: file.meta.database
  });
  extractMetaJob.priority('normal')
  extractMetaJob.retry({retries:50, wait:100*1000})
  extractMetaJob.save();
}

const createPdfConvertJob = (file) => {
  const convertPdfJob = new Job(DiscoveryJobs, 'convertPdf',{
    _id:file._id,
    name:file.name,
    type:file.type,
    database:file.meta.database
  });
  convertPdfJob.priority('normal')
  convertPdfJob.retry({retries:50, wait:100*1000})
  convertPdfJob.save();
}

const createHtmlConvertJob = (file) => {
  const convertHtmlJob = new Job(DiscoveryJobs, 'convertHtml',{
    _id:file._id,
    name:file.name,
    type:file.type,
    database: file.meta.database
  });
  convertHtmlJob.priority('normal')
  convertHtmlJob.retry({retries:50, wait:100*1000})
  convertHtmlJob.save();
}

const createPstExtractJob = (file) => {
  const extractPstJob = new Job(DiscoveryJobs, 'extractPst',{
    _id:file._id,
    name:file.name,
    type:file.type,
    database: file.meta.database
  });
  extractPstJob.priority('normal')
  extractPstJob.retry({retries:50, wait:100*1000})
  extractPstJob.save();
}