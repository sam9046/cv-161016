var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

app.use(express.static('../frontend'));

app.post('/email', jsonParser, function(req, res){
  console.log('body: ' + JSON.stringify(req.body));
  res.send();
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
