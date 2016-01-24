// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var express = require('express'),
    router = express.Router(),
    appController = require('../controllers/appController');

module.exports = function (app) {

    router.use('/:id', function (request, response, next) {
        appController.findById(request, response, next);
    });

    router.route('/')
        .get(appController.get)
        .post(appController.post);

    router.route('/:id')
        .get(appController.getById)
        .patch(appController.patchById)
        .delete(appController.deleteById);

    app.use('/apps', router);
};