var port = process.env.PORT || '8081';

module.exports = require("./express-server").listen(port, function() {
  console.log('Example app listening on port ' + port + '!');
});
