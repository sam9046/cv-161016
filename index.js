var port = process.env['PORT'] || 8080;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Mailgun = require('./mailgun');
var mailgun = new Mailgun();

// create application/json parser
var jsonParser = bodyParser.json();

app.use(express.static('frontend/'));
app.use('/react', express.static('frontend/index.html'));

app.post('/email', jsonParser, function(req, res){
  mailgun.sendMail(JSON.stringify(req.body), function(err, data) {

    if(err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, function () {
  console.log('Listening on port:' + port);
});
