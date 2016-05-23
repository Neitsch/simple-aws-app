var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.contentType('application/json');
  res.send(process.env);
});

var port = process.env.PORT || '8081';

app.listen(port, function() {
  console.log('Example app listening on port ' + port + '!');
});
