var express = require('express');
var cors = require('cors');
var route = require('./readpst-routes');

var upload = multer({storage:storage});

console.log('Initialize pst-extraction-worker service');

var app = express();
app.use(cors());
app.get('/readpst', route);
app.post('/readpst', route);
app.listen(6000, function(err) {
  if (err) console.error('Failed to run service', err.stack);
  else console.info('Service listening at http://localhost:%s', 6000);
});


