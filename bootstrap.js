var config = require('./config')();

var app =
global.app = {};

app.config = config;
app.mongoose = require('./lib/mongoose')(config.mongo);