var spawn = require('child_process').exec;
var mime = require('mime-types');
var shell = require('./shellHelper');
var fs = require('fs');
var uuid = require('node-uuid');

module.exports = extractPst;

var queue = [];
var active = false;
var sparkserver = false;

shell.series(['start-spark master'], function(err){
  if (err){
    console.log(err);
  } else {
  	sparkserver = true;
    console.log('started spark server');
  }
});

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

    console.log('Pst extraction worker delete temp file ' + job.tempPath);
    fs.unlink(job.tempPath, function(err) {
      if (err) console.error('Pst extraction worker failed to remove temp file', err.stack);
    });

    var newJob = queue.shift();
    if (newJob) {
      doJob(newJob);
    }
  }
}

function doJob(job) {
  console.log('Pst extraction process a job from the queue', {
    outputExtension: job.outputExtension,
    tempPath: job.tempPath
  });
  shell.series([
    './bin/explode_psts.sh',
    './bin/normalize_mbox.sh ingestId caseId alternateId label',
    './bin/run_spark_tika.sh 2g',
    './bin/run_spam_filter.sh 2g',
    './bin/run_binary_extraction_merge.sh 2g',
    './bin/run_spark_extract_numbers.sh 2g',
    './bin/run_spark_exif_attachments.sh 2g',
    './bin/run_spark_content_split.sh 2g',
    './bin/run_spark_emailaddr.sh 2g ingestId caseId alternateId label',
    './bin/run_spark_email_community_assign.sh 2g',
    './bin/run_spark_topic_clustering.sh 2g',
    './bin/run_spark_mitie.sh 2g',
    './bin/run_spark_transaction_entity.sh 2g'
    ], function(err){
      if (err){
        finishJob(job, err);
      }
      finishJob(job);
    });
}

function extractPst(req, res, next) {
  var inputType = req.get('content-type').split(';')[0];
  var outputType = req.get('accept').split(';')[0];
  var inputExtension = mime.extension(inputType);
  var outputExtension = mime.extension(outputType);

  var tempPath = '/usr/src/app/pst-extract/pst/' + uuid.v1() + '.pst';
  var writeStream = fs.createWriteStream(tempPath);
  req.pipe(writeStream);
  console.log('Pst extraction worker create temp file ' + tempPath);

  writeStream.on('error', function(err) {
    console.error('Pst extraction worker failed to write temp file', err.stack);
    next(err);
  });

  writeStream.on('finish', function() {
    console.log('Pst extraction worker temp file created ' + tempPath);
    pushJob({
      res: res,
      next: next,
      outputExtension: outputExtension,
      tempPath: tempPath,
      isOver: false
    });
  });
}
