// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var appModel = require('mongoose').model('AppModel');

exports.get = function (request, response) {
    appModel.find(request.query, function (error, logs) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.json(logs);
        }
    });
};

exports.post = function (request, response) {
    var log = new appModel(request.body);
    log.save(function (error) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(201).send(log);
        }
    });
};

exports.findById = function () {
    appModel.findById(request.params.id, function (error, app) {
        if (error) {
            response.status(500).send(error);
        } else if (log) {
            request.app = app;
            next();
        } else {
            response.status(404).send("App not found");
        }
    });
};

exports.getById = function (request, response) {
    response.json(request.app);
};

exports.patchById = function (request, response) {
    if (request.body._id) {
        delete request.body._id;
    }

    for (var i in request.body) {
        request.app[i] = request.body[i];
    }

    request.app.save(function (error) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.json(request.app);
        }
    });
};

exports.deleteById = function (request, response) {
    request.app.remove(function (error) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(204).send('Removed');
        }
    });
};