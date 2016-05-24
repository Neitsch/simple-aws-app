'use strict';

const React = require('react');
const Page = require('../dist/main').default;
const ReactDomServer = require('react-dom/server');

module.exports = require('express')()
  .get('/', (req, res) => {
    res.send('Hello World!');
  })
  .get('/react', (req, res) => {
    res.send(
      ReactDomServer
      .renderToString(
        React.createElement(Page, { name: 'World' }, {})
      )
    );
  })
  .get('/health', (req, res) => {
    res.send();
  });
