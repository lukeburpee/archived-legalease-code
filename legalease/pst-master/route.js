var spawn = require('child_process').exec;
var mime = require('mime-types');
var shell = require('./shellHelper');
var multer = require('multer');
var fs = require('fs');
var uuid = require('node-uuid');

module.exports = extractPst;

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    var path = '/usr/src/app/pst-extract/pst'
  }
});

var upload = multer({storage:storage});

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
    tempPath: job.tempPath
  });
  shell.series([
    'tar xvf ' + job.tempPath + ' -c /usr/src/app/pst-extract',
    './bin/explode_psts.sh',
    './bin/normalize_mbox.sh ingestId caseId alternateId label',
    './bin/run_spark_tika.sh 2g',
    './bin/run_ocr_processing.sh 2g',
    './bin/run_human_receipt_detection_harness.sh 2g',
    './bin/run_binary_extraction_merge.sh 2g',
    './bin/run_spark_extract_numbers.sh 2g',
    './bin/run_spark_exif_attachments.sh 2g',
    './bin/run_spark_content_split.sh 2g',
    './bin/run_spark_emailaddr.sh 2g ingestId caseId alternateId label',
    './bin/run_spark_email_community_assign.sh 2g',
    './bin/run_spark_topic_clustering.sh 2g',
    './bin/run_spark_translation.sh 2g en apertium moses:5000',
    './bin/run_spark_mitie.sh 2g',
    './bin/run_spark_geoip.sh 2g',
    './bin/run_spark_transaction_entity.sh 2g'
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
