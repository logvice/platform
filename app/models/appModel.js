// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var appModel = new Schema({
    appId: {type: String, trim: true, maxlength: 120},
    name: {type: String, trim: true, maxlength: 120},
    description: {type: String, trim: true, maxlength: 500},
    created: {type: Date, default: Date.now},
    update: {type: Date, default: Date.now}
});

module.exports = mongoose.model('AppModel', appModel);