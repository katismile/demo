var mongoose = require('mongoose');

module.exports = function(config) {
    return mongoose.connect('mongodb://' + config.host + ':' + config.port + '/' + config.database);
};