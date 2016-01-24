// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var userController = require('../controllers/userController'),
    passport = require('passport');

// Define the routes module' method
module.exports = function(app) {
    // Set up the 'signup' routes
    app.route('/signup')
        .get(userController.renderSignup)
        .post(userController.signup);

    // Set up the 'signin' routes
    app.route('/signin')
        .get(userController.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/signin',
            failureFlash: true
        }));

    // Set up the 'signout' route
    app.get('/signout', userController.signout);
};