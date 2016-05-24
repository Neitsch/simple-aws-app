'use strict';

const express = require('./express-server');

const port = process.env.PORT || '8081';

module.exports = express.listen(port, () => {
});
