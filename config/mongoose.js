// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var config = require('./config'),
    mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function () {
    // Use Mongoose to connect to MongoDB
    var db = mongoose.connect(config.mongoDbURL, function (err) {
        if (err) {
            console.log('MongoDB: connection error: ' + err);
        } else {
            console.log('MongoDB: successfully connected.');
        }
    });

    // Load the application models
    require('../app/models/appModel');
    require('../app/models/logModel');
    require('../app/models/userModel');

    // Return the Mongoose connection instance
    return db;
};