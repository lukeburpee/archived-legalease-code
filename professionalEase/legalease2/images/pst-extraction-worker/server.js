var express = require('express');
var cors = require('cors');
var route = require('./route');

console.log('Initialize pst-extraction-worker service');

var app = express();
app.use(cors());
app.get('/pst', route);
app.post('/pst', route);
app.listen(6000, function(err) {
  if (err) console.error('Failed to run service', err.stack);
  else console.info('Service listening at http://localhost:%s', 6000);
});


