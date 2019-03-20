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
    textWorkers.trigger();
    metaWorkers.trigger();
  };
  observer.changed = function(id, oldFields, clearedFields, newFields) {
    console.log('triggering job collection worker');
    console.log('[CHANGED] in ' + observer.name + ": " + id);
    console.log('[CHANGED] old field values: ', oldFields);
    console.log('[CHANGED] new field values: ', newFields);
    textWorkers.trigger();
    metaWorkers.trigger();
  }
   var textWorkers = Job.processJobs('discoveryJobsQueue', 
    'extractText',
    { 
      callbackStrict: true,
      pollingInterval: 6000,
      workTimeout: 90*1000 
    },
    extractTextWorker
  );
  var metaWorkers = Job.processJobs('discoveryJobsQueue',
    'extractMeta',
    { 
      callbackStrict: true,
      pollingInterval: 6000, 
      workTimeout: 90*1000 
    },
    extractMetaWorker
  );
  ddp.on('socket-close', (code, message) => {
    textWorkers.pauseJobs();
    metaWorkers.pauseJobs();
  });
  ddp.on('socket-error', (error) => {
    console.log('Error: %j', error);
    textWorkers.pauseJobs();
    metaWorkers.pauseJobs();
  });
});

  var extractTextWorker = function(job, cb){
  console.log('extracting text for file: ' + job.data._id);
  job.progress(20, 100);
  ddp.call(
    'extract.text', 
    [job.data._id, job.data.name, job.data.type], 
    function(err, result){
      if (err){
        console.log('extract text job failed with error: ' + err);
        job.fail('extract text job failed with error: ' + err);
        cb();
      }
      console.log('called text extraction, result: ' + result);
      job.progress(60,100);
    },
    function(){
      console.log('updated');
      console.log(ddp.collections.discoveryJobsQueue);
      job.progress(80,100);
    });
  job.progress(100, 100);
  console.log('finished extract text job: ' + job.data._id);
  job.done('finished extract text job: ' + job.data._id);
  cb();
}

var extractMetaWorker = function(job, cb){
  console.log('extracting meta for file: ' + job.data._id);
  job.progress(20, 100);
  ddp.call('extract.meta', 
  [job.data._id, job.data.name, job.data.type], 
  function(err, result){
    if (err){
      console.log('extract meta job failed with error: ' + err);
      job.fail('extract meta job failed with error: ' + err);
      cb();
    }
    console.log('called meta extraction, result: ' + result);
    job.progress(60,100);
  },
  function(){
      console.log('updated');
      job.progress(80,100);
  });
  console.log('finished extract meta for file: ' + job.data._id);
  job.progress(100, 100);
  job.done('finished extract meta job: ' + job.data._id);
  cb();
}