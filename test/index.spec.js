var request = require('supertest');
describe('Express Endpoints', function() {
  var server;
  beforeEach(function() {
    server = require('../server/index.js');
  });
  afterEach(function() {
    server.close();
  });
  it('Health Check at /health', function(done) {
    request(server)
      .get('/health')
      .expect(200, done);
  });
  it('Hello World!', function(done) {
    request(server)
      .get('/')
      .expect("Hello World!", done);
  });
});
