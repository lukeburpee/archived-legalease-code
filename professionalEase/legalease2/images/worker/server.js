var DDP = require('ddp');
var DDPlogin = require('ddp-login');
var Job = require('meteor-job');
var ESMongoSync = require('node-elasticsearch-sync');
console.log('Starting Worker...');

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
  };
  console.log('ddp connected');
  var observer = ddp.observe('discoveryJobsQueue');
    observer.added = function() { 
    console.log('Triggering Conversion Job Worker update');
    htmlWorkers.trigger();
    pdfWorkers.trigger();
    textWorkers.trigger();
    metaWorkers.trigger();
    annotationWorkers.trigger();
  };
  observer.changed = function(id, oldFields, clearedFields, newFields) {
    console.log('triggering job collection worker');
    console.log('[CHANGED] in ' + observer.name + ": " + id);
    console.log('[CHANGED] old field values: ', oldFields);
    console.log('[CHANGED] new field values: ', newFields);
    htmlWorkers.trigger();
    pdfWorkers.trigger();
    textWorkers.trigger();
    metaWorkers.trigger();
    annotationWorkers.trigger();
  }
  var pdfWorkers = Job.processJobs('discoveryJobsQueue', 
    'convertPdf', 
    { 
      callbackStrict: true,
      pollingInterval: 6000,
      workTimeout: 90*1000 
    },
    convertPdfWorker
  );
  var htmlWorkers = Job.processJobs('discoveryJobsQueue', 
    'convertHtml',
    { 
      callbackStrict: true,
      pollingInterval: 6000,
      workTimeout: 90*1000 
    },
    convertHtmlWorker
  );
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
  var pstWorkers = Job.processJobs('discoveryJobsQueue', 
    'extractPst', 
    { 
      callbackStrict: true,
      pollingInterval: 6000,
      workTimeout: 90*1000 
    },
    extractPstWorker
  );
  ddp.on('socket-close', (code, message) => {
    htmlWorkers.pause();
    pdfWorkers.pause();
    textWorkers.pause();
    metaWorkers.pause();
  });
  ddp.on('socket-error', (error) => {
    console.log('Error: %j', error);
    htmlWorkers.pause();
    pdfWorkers.pause();
    textWorkers.pause();
    metaWorkers.pause();
  });
});

var convertHtmlWorker = function(job, cb){
  console.log('converting html for file: ' + job.data._id);
  job.progress(30, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  ddp.call('convert.html', 
  [job.data._id, job.data.name, job.data.type], 
  function(err, result){
    if (err){
      console.log('convert html job failed with error: ' + err);
      job.fail('convert html job failed with error: ' + err);
      cb();
    }
    console.log('called html function, result: ' + result);
  job.progress(90, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  },
  function(){
      job.progress(60, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
    });
  console.log('finished convert html job: ' + job.data._id);
  job.done('finished convert html method for file: ' + job.data._id);
  cb();
}

var convertPdfWorker = function(job, cb){
  console.log('converting pdf for file: ' + job.data._id);
  job.progress(30, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  ddp.call('convert.pdf', 
  [job.data._id, job.data.name, job.data.type], 
  function(err, result){
    if (err){
      console.log('convert pdf job failed with error: ' + err);
      job.fail('convert pdf job failed with error: ' + err);
      cb();
    }
    console.log('called pdf function, result: ' + result);
  	job.progress(60, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  },
  function(){
    job.progress(60,100, {echo:true}, function(err, result){if(err){console.log(err)}});
  });
  job.done('finished convert pdf job for file: ' + job.data._id);
  cb();
}

var extractPstWorker = function(job, cb){
  console.log('extracting pst file: ' + job.data._id);
  job.progress(30, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  ddp.call('extract.pst', 
  [job.data._id, job.data.name, job.data.type], 
  function(err, result){
    if (err){
      console.log('extract pst job failed with error: ' + err);
      job.fail('extract pst job failed with error: ' + err);
      cb();
    }
    console.log('called extract pst function, result: ' + result);
  job.progress(90, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  },
  function(){
      job.progress(60, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
    });
  console.log('finished extract pst job: ' + job.data._id);
  job.done('finished extract pst method for file: ' + job.data._id);
  cb();
}

var extractTextWorker = function(job, cb){
  console.log('extracting text for file: ' + job.data._id);
  job.progress(30, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  ddp.call(
    'extract.text', 
    [job.data._id, job.data.name, job.data.type, job.data.annotateText], 
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
  job.done('finished extract meta job: ' + String(job.data._id));
  cb();
}

var annotateTextWorker = function(job, cb){
  console.log('annotating text for file: ' + job.data._id);
  job.progress(30, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  ddp.call('annotate.text', 
  [job.data._id, job.data.text], 
  function(err, result){
    if (err){
      console.log('annotate text job failed with error: ' + err);
      job.fail('annotate text job failed with error: ' + err);
      cb();
    }
    console.log('called annotate text function, result: ' + result);
  	job.progress(60, 100, {echo:true}, function(err, result){if(err){console.log(err)}});
  },
  function(){
    job.progress(60,100, {echo:true}, function(err, result){if(err){console.log(err)}});
  });
  job.done('finished annotate text job for file: ' + job.data._id);
  cb();
}

console.log('Setting up default elasticsearch collection sync...');

var clientWatcher = {
  collectionName: 'clients',
  index: 'entities',
  type: 'clients',
  fetchExistingDocuments: true, 
  priority: 0
};
var firmWatcher = {
  collectionName: 'firms',
  index: 'entities',
  type: 'firms',
  fetchExistingDocuments: true,
  priority: 0
};

var vendorWatcher = {
  collectionName: 'vendors',
  index: 'entities',
  type: 'vendors',
  fetchExistingDocuments: true, 
  priority: 0
};

var matterWatcher = {
  collectionName: 'matters',
  index: 'matters',
  type: 'main',
  fetchExistingDocuments: true,
  priority: 0
};

var caseWatcher = {
  collectionName: 'cases',
  index: 'matters',
  type: 'cases',
  fetchExistingDocuments: true,
  priority: 0
};

var caseFileWatcher = {
  collectionName: 'casefiles',
  index: 'matterfiles',
  type: 'caseFiles',
  fetchExistingDocuments: true,
  priority: 0
};

var discoveryFileWatcher = {
  collectionName: 'discoveryfiles',
  index: 'matterfiles',
  type: 'discoveryfiles',
  fetchExistingDocuments: true,
  priority: 0
};

var watcherArray =  [];

watcherArray.push(
  clientWatcher, 
  firmWatcher, 
  vendorWatcher, 
  matterWatcher, 
  caseWatcher, 
  caseFileWatcher, 
  discoveryFileWatcher
);
// initialize package as below

var finalCallBack = function(){
  return null
}

var data = "mongodb://mongo1:27017,mongo2:27017,mongo3:27017/app?replicaSet=appRS";
var oplog = "mongodb://mongo1:27017,mongo2:27017,mongo3:27017/local?replicaSet=appRS"
var elastic = "http://elastic1:9200";

var config = {
  mongo: {
    data: data,
    oplog: oplog,
    batch: 100
  },
  elastic: elastic
};

ESMongoSync.init(config, watcherArray, null);

console.log('default elastic search collection sync established');