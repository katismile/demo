
var _ = require('lodash'),
    config = require('./config');

module.exports = function(env) {
    env = env || 'production';
    return _.merge({ env: env }, config['production'], config[env]);
};
