var React = require('react');

module.exports = require('express')()
  .get('/', function(req, res) {
    res.send("Hello World!");
  })
  .get('/react', function(req, res) {
    res.send(
      require('react-dom/server')
      .renderToString(
        React.createElement(require('../dist/main'),{name:"World"}, {})
      )
    );
  })
  .get('/health', function(req, res) {
    res.send();
  });
