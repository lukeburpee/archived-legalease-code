var DDP = require('ddp');
var DDPlogin = require('ddp-login');
var Job = require('meteor-job');
var request = require('request');
console.log('Starting jobs worker...');

var ddp = new DDP({
  host: "app",
  port: 3000,
  ssl: false,
  autoReconnect: true,
  autoReconnectTimer: 3000,
  maintainCollections: true,
  use_ejson: true
});

Job.setDDP(ddp);

ddp.connect(function(err, wasReconnect){
  if (err) { 
    console.log('DDP connection error');
    throw err;
  };
  if (wasReconnect){
    console.log('DDP reconnected');
    var observer = ddp.observe('discoveryJobsQueue');
  }
  console.log('ddp connected');
  var observer = ddp.observe('discoveryJobsQueue');
    observer.added = function() { 
    console.log('triggering job collection worker');
    htmlWorkers.trigger();
    pdfWorkers.trigger();
  };
  observer.changed = function(id, oldFields, clearedFields, newFields) {
    console.log('triggering job collection worker');
    console.log('[CHANGED] in ' + observer.name + ": " + id);
    console.log('[CHANGED] old field values: ', oldFields);
    console.log('[CHANGED] new field values: ', newFields);
    htmlWorkers.trigger();
    pdfWorkers.trigger();
  }
  var htmlWorkers = Job.processJobs('discoveryJobsQueue', 
    'convertHtml',
    { 
      callbackStrict: true,
      pollingInterval: 6000,
      workTimeout: 90*1000 
    },
    convertHtmlWorker
  );
  var pdfWorkers = Job.processJobs('discoveryJobsQueue', 
    'convertPdf', 
    { 
      callbackStrict: true,
      pollingInterval: 6000,
      workTimeout: 90*1000 
    },
    convertPdfWorker
  );
  ddp.on('socket-close', (code, message) => {
    htmlWorkers.pauseJobs();
    pdfWorkers.pauseJobs();
  });
  ddp.on('socket-error', (error) => {
    console.log('Error: %j', error);
    htmlWorkers.pauseJobs();
    pdfWorkers.pauseJobs();
  });
});

var convertHtmlWorker = function(job, cb){
  console.log('converting html for file: ' + job.data._id);
  job.progress(20, 100);
  ddp.call('convert.html', 
  [job.data._id, job.data.name, job.data.type], 
  function(err, result){
    if (err){
      console.log('convert html job failed with error: ' + err);
      job.fail('convert html job failed with error: ' + err);
      cb();
    }
    console.log('called html function, result: ' + result);
    job.progress(60, 100);
  },
  function(){
      console.log('updated');
      job.progress(80, 100);
    });
  console.log('finished convert html job: ' + job.data._id);
  job.progress(100, 100);
  job.done('error running convert html method for file: ' + job.data._id);
  cb();
}

var convertPdfWorker = function(job, cb){
  console.log('converting pdf for file: ' + job.data._id);
  job.progress(20, 100);
  ddp.call('convert.html', 
  [job.data._id, job.data.name, job.data.type], 
  function(err, result){
    if (err){
      console.log('convert pdf job failed with error: ' + err);
      job.fail('convert pdf job failed with error: ' + err);
      cb();
    }
    console.log('called function, result: ' + result);
    job.progress(60, 100);
  },
  function(){
      console.log('updated');
      job.progress(80, 100);
  });
  console.log('finished convert pdf job: ' + job.data._id);
  job.progress(100, 100);
  job.done('finished convert pdf job: ' + job.data._id);
  cb();
}