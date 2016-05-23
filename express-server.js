module.exports = require('express')()
  .get('/', function(req, res) {
    res.send("Hello World!");
  })
  .get('/health', function(req, res) {
    res.send();
  });
