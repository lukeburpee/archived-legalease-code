var DDP = require('ddp');
var DDPlogin = require('ddp-login');
var Job = require('meteor-job');

// `Job` here has essentially the same API as JobCollection on Meteor.
// In fact, job-collection is built on top of the 'meteor-job' npm package!

// Setup the DDP connection
var ddp = new DDP({
  host: "meteor.mydomain.com",
  port: 3000,
  use_ejson: true
});

// Connect Job with this DDP session
Job.setDDP(ddp);

// Open the DDP connection
ddp.connect(function (err) {
  if (err) throw err;
  // Call below will prompt for email/password if an
  // authToken isn't available in the process environment
  DDPlogin(ddp, function (err, token) {
    if (err) throw err;
    // We're in!
    // Create a worker to get sendMail jobs from 'myJobQueue'
    // This will keep running indefinitely, obtaining new work
    // from the server whenever it is available.
    // Note: If this worker was running within the Meteor environment,
    // Then only the call below is necessary to setup a worker!
    // However in that case processJobs is a method on the JobCollection
    // object, and not Job.
    var workers = Job.processJobs('myJobQueue', 'sendEmail',
      function (job, cb) {
        // This will only be called if a
        // 'sendEmail' job is obtained
        var email = job.data; // Only one email per job
        sendEmail(email.address, email.subject, email.message,
          function(err) {
            if (err) {
              job.log("Sending failed with error" + err,
                {level: 'warning'});
              job.fail("" + err);
            } else {
              job.done();
            }
            // Be sure to invoke the callback
            // when work on this job has finished
            cb();
          }
        );
      }
    );
  });
});