var spawn = require('child_process').spawn;
var mime = require('mime-types');
var shell = require('./shellHelper');
var fs = require('fs');
var uuid = require('node-uuid');

module.exports = extractPst;

var queue = [];
var active = false;

var spark = spawn('start-spark master');
spark.stdout.on('data', function(data){
  console.log(data);
});
spark.stderr.on('data', function(data){
  console.log(data);
});
spark.on('close', function(data){
  console.log(`child process exited with code ${code}`);
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

    console.log('Unoconv converter delete temp file ' + job.tempPath);
    fs.unlink(job.tempPath, function(err) {
      if (err) console.error('Unoconv converter failed to remove temp file', err.stack);
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
    './bin/run_spark_tika.sh spark://spark-master:6066 1g',
    './bin/run_spark_content_split.sh 2g',
    './bin/run_spark_emailaddr.sh 2g ingestId caseId alternateId label',
    './bin/run_spark_email_community_assign.sh 2g',
    './bin/run_spark_topic_clustering.sh 2g',
    './bin/run_spark_mitie.sh 2g'
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
  console.log('Unoconv converter create temp file ' + tempPath);

  writeStream.on('error', function(err) {
    console.error('Unoconv converter failed to write temp file', err.stack);
    next(err);
  });

  writeStream.on('finish', function() {
    console.log('Unoconv converter temp file created ' + tempPath);
    pushJob({
      res: res,
      next: next,
      outputExtension: outputExtension,
      tempPath: tempPath,
      isOver: false
    });
  });
}
