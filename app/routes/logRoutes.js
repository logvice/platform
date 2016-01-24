// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var express = require('express'),
    router = express.Router(),
    logController = require('../controllers/logController');

module.exports = function (app) {

    router.use('/:id', function (request, response, next) {
        logController.findById(request, response, next);
    });

    router.route('/')
        .get(logController.get)
        .post(logController.post);

    router.route('/:id')
        .get(logController.getById)
        .patch(logController.patchById);

    app.use('/logs', router);
};