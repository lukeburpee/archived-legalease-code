var DDP = require('ddp');
var DDPlogin = require('ddp-login');
var Job = require('meteor-job');
console.log('Starting Extraction Job Worker...');

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
    console.log('triggering extraction job worker update');
    textWorkers.trigger();
    metaWorkers.trigger();
  };
  observer.changed = function(id, oldFields, clearedFields, newFields) {
    console.log('triggering extraction job worker update');
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
  job.progress(30, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  ddp.call(
    'extract.text', 
    [job.data._id, job.data.name, job.data.type], 
    function(err, result){
      if (err){
        console.log('extract text job failed with error: ' + err);
        job.fail('extract text job failed with error: ' + err,
          {echo: true}
        );
        cb();
      }
      console.log('called text extraction, result: ' + result);
      job.progress(90,100, {echo:true}, function(err, result){if(err){console.log(err)}});
    },
    function(){
        console.log('creating text dependent jobs...');
        if (job.data.annotateText){
          var annotateJob = new Job('discoveryJobsQueue', 'annotateText', { _id: job.data._id });
          annotateJob.priority('normal')
          .depends([job])
          .save(function(err, result){
            if (err){
              console.log('Failed to create Annotation job for file: ' + job.data._id, 
                { echo: true }
              );
              job.fail()
              cb()
            }
            console.log('New Annotation job created for file: ' + job.data._id );
          })
        }
        if (job.data.translate){
          var translateJob = new Job('discoveryJobsQueue', 'translateText', { _id: job.data._id });
          translateJob.priority('normal')
          .depends([job])
          .save(function(err, result){
            if (err){
              console.log('Failed to create Translate job for file: ' + job.data._id + ' due to error: ');
              job.fail('Failed to create Translate job for file: ' + job.data._id + ' due to error: ', {echo:true});
              cb()
            }
            console.log('New Translation job created for file: ' + job.data._id );
          })
        }
        if (job.data.allowLSA){
          var lsaJob = new Job('discoveryJobsQueue', 'addToLSA', { _id: job.data._id });
          lsaJob.priority('normal')
          .depends([job])
          .save(function(err, result){
            if (err){
              console.log('Failed to create LSA job for file: ' + job.data._id + ' due to error: ' + err);
              job.fail('Failed to create LSA job for file: ' + job.data._id + ' due to error: ' + err,{echo: true});
              cb()
            }
            console.log('New LSA job created for file: ' + job.data._id);
          })
        }
        if (job.data.createCorpus){
          var corpusJob = new Job('discoveryJobsQueue', 'addToCorpus', { _id: job.data._id });
          corpusJob.priority('normal')
          .depends([job])
          .save(function(err, result){
            if (err){
              console.log('Failed to create Corpus job for file: ' + job.data._id + ' due to error: ' + err);
              job.fail('Failed to create Corpus job for file: ' + job.data._id + ' due to error: ' + err, {echo: true})
              cb()
            }
          console.log('New Corpus job created for file: ' + job.data._id);
        })
      }
      job.progress(60,100, {echo:true}, function(err, result){if(err){console.log(err)}});
  });
  job.progress(100, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  console.log('finished extract text job: ' + job.data._id);
  job.done('finished extract text job: ' + String(job.data._id));
  cb();
}

var extractMetaWorker = function(job, cb){
  console.log('extracting meta for file: ' + job.data._id);
  job.progress(30, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  ddp.call('extract.meta', 
  [job.data._id, job.data.name, job.data.type], 
  function(err, result){
    if (err){
      console.log('extract meta job failed with error: ' + err);
      job.fail('extract meta job failed with error: ' + err, {echo:true});
      cb();
    }
    console.log('called meta extraction, result: ' + result);
    job.progress(90,100, {echo:true}, function(err, result){if(err){console.log(err)}});
  },
  function(){
      console.log('updated');
      job.progress(60,100, {echo:true}, function(err, result){if(err){console.log(err)}});
  });
  console.log('finished extract meta for file: ' + job.data._id);
  job.progress(100, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  job.done('finished extract meta job: ' + String(job.data._id));
  cb();
}