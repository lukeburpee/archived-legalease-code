var spawn = require('child_process').exec;
var mime = require('mime-types');
var shell = require('./shellHelper');
var multer = require('multer');
var fs = require('fs');
var uuid = require('node-uuid');

module.exports = extractPst;

var queue = [];

function pushJob(job) {
  if (active) {
    queue.push(job);
  } else {
    doJob(job);
  }
}

function finishJob(job, err) {
  if (!job.isOver) {
    active = false;
    job.isOver = true;
    job.next(err);

    console.log('Readpst Worker delete temp file ' + job.tempPath);
    fs.unlink(job.tempPath, function(err) {
      if (err) console.error('Readpst worker failed to remove temp file', err.stack);
    });

    var newJob = queue.shift();
    if (newJob) {
      doJob(newJob);
    }
  }
}

function doJob(job) {
  console.log('Pst extraction process a job from the queue', {
    tempPath: job.tempPath
  });
  shell.series([
    './bin/explode_psts.sh',
    './bin/normalize_mbox.sh ingestId caseId alternateId label',
    ], function(err){
      if (err){
        finishJob(job, err);
      }
      finishJob(job);
    });
}

function extractPst(req, res, next) {
  if (req.file){
    console.log('temp file created at: '+ req.file.path);
    pushJob({
      res: res,
      next: next,
      tempPath: req.file.path,
      isOver: false
    });
  } else {
    res.status(500).json({error: 'No file was provided in the "data" field'});
  }
}
