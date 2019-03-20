var DDP = require('ddp');
var DDPlogin = require('ddp-login');
var Job = require('meteor-job');
console.log('Starting text extraction worker...');
var ddp = new DDP({
  host: "app",
  port: 3000,
  ssl: false,
  autoReconnect: true,
  autoReconnectTimer: 500,
  maintainCollections: true,
  use_ejson: true
});

Job.setDDP(ddp);

ddp.connect(function(err, wasReconnect){
  if (err) { 
    console.log('DDP connection error');
    return
  };
  if (wasReconnect){
    console.log('Reestablishment of a connection.');
  }
  Job.processJobs('discoveryJobsQueue', 'extractText', (job, cb) => {
    ddp.call('extract.text', [job.data._id, job.data.name, job.data.type], function(error, result){
      if (error){ 
        console.log(error); 
      }
      console.log('text extracted from discovery file: ' + String(job.data._id));
      job.done()
    });
    cb(null);
  });
  Job.processJobs('discoveryJobsQueue', 'extractMeta', (job, cb) => {
    ddp.call('extract.meta', [job.data._id, job.data.name, job.data.type], function(error, result){
      if (error){ 
        console.log(error); 
      }
      console.log('metadata extracted from discovery file: ' + String(job.data._id));
      job.done()
    });
    cb(null);
  });
  Job.processJobs('discoveryJobsQueue', 'convertHtml', (job, cb) => {
    ddp.call('convert.html', [job.data._id, job.data.name, job.data.type], function(error, result){
      if (error){ 
        console.log(error); 
      }
      console.log('discovery file: ' + String(job.data._id) + ' converted to html');
      job.done()
    });
    cb(null);
  });
  Job.processJobs('discoveryJobsQueue', 'convertPdf', (job, cb) => {
    ddp.call('convert.html', [job.data._id, job.data.name, job.data.type], function(error, result){
      if (error){ 
        console.log(error); 
      }
      console.log('discovery file: ' + String(job.data._id) + ' converted to pdf');
      job.done()
    });
    cb(null);
  });
});
