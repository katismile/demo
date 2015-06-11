var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    access_token: 'String',
    firstName: 'String',
    lastName: 'String',
    email: 'String'
});

module.exports = mongoose.model('User', schema);
