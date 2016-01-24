// Invoke 'strict' JavaScript mode
'use strict';

// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
var config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

// Create a new Mongoose connection instance
var db = mongoose();

// Create a new Express application instance
var app = express();

// Configure the Passport middleware
var passport = passport();

app.listen(config.port, config.host);

// Log the server status to the console
console.log('Server running at http://' + config.host + ':'+ config.port +'/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;