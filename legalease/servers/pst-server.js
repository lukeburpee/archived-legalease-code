var express = require('express');
var cors = require('cors');
var multer = require('multer');
var route = require('./pst-routes');

var storage = multer.diskStorage({
	destination: function(req, file, cb){
		var path = '/usr/src/app/pst-extract'
	}
});

var upload = multer({storage:storage});

console.log('Initialize pst-extraction-worker service');

var app = express();
app.use(cors());
app.get('/pst', route);
app.post('/pst', upload.single('pst_file'), route);
app.listen(6000, function(err) {
  if (err) console.error('Failed to run service', err.stack);
  else console.info('Service listening at http://localhost:%s', 6000);
});


