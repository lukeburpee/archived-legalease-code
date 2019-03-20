import { Meteor } from 'meteor/meteor';
import { DDP } from 'meteor/ddp-client';
import { Job } from 'meteor/vsivsi:job-collection';

Meteor.startup(() => {
  const ddp = DDP.connect(Meteor.settings.ROOT_URL);
  Job.setDDP(ddp);
  let status = ddp.status;
  if (status === 'connected'){
  	console.log('connected to main app');
  let jobWorker = Job.processJobs('discoveryJobsQueue', 
    ['extractText', 'extractMeta', 'convertPdf', 'convertHtml'], 
    { concurrency: 1, prefetch: 5, workTimeout:30000, callbackStrict: true }, worker);
  function worker(job, cb){
    if (job[0].type === 'extractText'){
      extractTextWorker(job, cb);
    } else if (job[0].type === 'extractMeta'){
      extractMetaWorker(job, cb);
    } else if (job[0].type === 'convertPdf'){
      convertPdfWorker(job, cb);
    } else if (job[0].type === 'convertHtml'){
      convertHtmlWorker(job, cb);
    } else {
      job.fail('failed to determine job type: ' + job.data._id);
      cb(null);
    }
  }
  function extractTextWorker(job, cb){
  	job.log('starting text extraction for document: ' + job.data._id);
  	ddp.call(
  		'extract.text', 
  		[job.data._id, job.data.name, job.data.type], 
  		function(err, result){
  			if (err){
  				job.fail('extract text job failed with error: ' + err);
  			}
  			console.log('called function, result: ' + result);
  		});
  	job.done();
  	cb();
  }
  function extractMetaWorker(job, cb){
    job.log('starting meta extraction for document: ' + job.data._id);
    ddp.call('extract.meta', 
      [job.data._id, job.data.name, job.data.type], 
      function(err, result){
        if (err){
          job.fail('extract meta job failed with error: ' + err);
        }
        console.log('called function, result: ' + result);
      });
    job.done()
    cb();
  }
  function convertHtmlWorker(job, cb){
    job.log('starting html conversion for document: ' + job.data._id);
    ddp.call('convert.html', 
      [job.data._id, job.data.name, job.data.type], 
      function(err, result){
        if (err){
          job.fail('convert html job failed with error: ' + err);
        }
        console.log('called function, result: ' + result);
      });
    job.done();
    cb();
  }
  function convertPdfWorker(job, cb){
    job.log('starting pdf conversion for document: ' + job.data._id);
    ddp.call('convert.html', 
      [job.data._id, job.data.name, job.data.type], 
      function(err, result){
        if (err){
          job.fail('convert html job failed with error: ' + err);
        }
        console.log('called function, result: ' + result);
      });
    job.done();
    cb();
  }
}
});
