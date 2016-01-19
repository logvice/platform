var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userModel = new Schema({
    name: String,
    password: String
});

module.exports = mongoose.model('UserModel', userModel);