var spawn = require('child_process').spawn;
var DDP = require('ddp');
var DDPlogin = require('ddp-login');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var Grid = require('gridfs-stream');
var Job = require('meteor-job');
var mime = require('mime-types');
var fs = require('fs');
var uuid = require('node-uuid');

var db = new mongo.Db('app', mongo.Server('mongodb://mongo1:27017,mongo2:27017,mongo3:27017/app?replicaSet=appRS&w=0&readPreference=secondary'));

var gfs = Grid(db, mongo);

prepareListener();

function prepareListener() {
  console.log('UNO listener (libreoffice) will be spawned');
  var UNOConnection = 'socket,host=127.0.0.1,port=2002,tcpNoDelay=1;urp;StarOffice.ComponentContext';

  // imitation of unoconv:
  // https://github.com/dagwieers/unoconv/blob/master/unoconv#L806
  spawn('soffice', [
    '--headless',
    '--invisible',
    '--nocrashreport',
    '--nodefault',
    '--nofirststartwizard',
    '--nologo',
    '--norestore',
    '--accept=' + UNOConnection
  ]).on('exit', function(code) {
    console.warn('UNO listener exited (it should act as a daemon) with code ' + code);
    prepareListener();
  });
}

function doJob(job) {
  var _id;
  var readStream;
  var metadata;
  var writeStream;
  var child;
  console.log('starting conversion job for file ' + job.data._id)
  _id = (job.data.versions['original'].meta || {}).gridFsFileId;
  if (_id){
    readStream = gfs.createReadStream({_id: _id});
    readStream.on('error', function(err){throw err});
    metadata = { name: 'pdf', discoveryfileId: job.data._id, uploadDate: new Date() };
    writeStream = gfs.createWriteStream({ filename: job.data.name });
    child = spawn('unoconv', [
      '--stdout',
      '--no-launch',
       '--format', 'pdf',
      readStream
    ]);

    child.on('error', function(err) {
     console.warn('Unoconv spawn child failed', err);
     finishJob(job, err);
    });

    child.on('exit', function(code) {
     console.log('Unoconv spawn child exited with code', code);
    });

    child.stdout.pipe(writeStream);

    child.stderr.on('data', function(data) {
      console.warn('Unoconv converter received message on stderr', data.toString);
    });
    writeStream.on('error', function(err){throw err});
    writeStream.on('close', function(){
      console.log('converted pdf for ' + String(job.data._id) + ' written to gridfs');
    });
  } else {
    readStream = fs.createReadStream(job.data.versions['original'].path);
    readStream.on('error', function(err){throw err});
    metadata = { name: 'pdf', discoveryfileId: job.data._id, uploadDate: new Date() };
    writeStream = gfs.createWriteStream({ filename: job.data.name });
    child = spawn('unoconv', [
      '--stdout',
      '--no-launch',
       '--format', 'pdf',
      readStream
    ]);

    child.on('error', function(err) {
     console.warn('Unoconv spawn child failed', err);
     finishJob(job, err);
    });

    child.on('exit', function(code) {
     console.log('Unoconv spawn child exited with code', code);
    });

    child.stdout.pipe(writeStream);

    child.stderr.on('data', function(data) {
      console.warn('Unoconv converter received message on stderr', data.toString);
    });
    writeStream.on('error', function(err){throw err});
    writeStream.on('close', function(){
      console.log('converted pdf for ' + String(job.data._id) + ' written to gridfs');
    });
  }
}

var ddp = new DDP({
  host: "app",
  port: 3000,
  use_ejson: true
});

Job.setDDP(ddp);

// Open the DDP connection
ddp.connect(function (err) {
  if (err) throw err;
  console.log('connected to main app server');
  const pdfWorker = Job.processJobs('convertPdfQueue', 'convertPdf', (job, cb) => {
    doJob(job)
    cb()
  });
});