// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var logModel = require('mongoose').model('LogModel');

exports.get = function (request, response) {
    logModel.find(request.query, function (error, logs) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.json(logs);
        }
    });
};

exports.post = function (request, response) {
    var log = new logModel(request.body);
    log.save(function (error) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.status(201).send(log);
        }
    });
};

exports.getById = function (request, response) {
    response.json(request.log);
};

exports.findById = function (request, response, next) {
    logModel.findById(request.params.id, function (error, log) {
        if (error) {
            response.status(500).send(error);
        } else if (log) {
            request.log = log;
            next();
        } else {
            response.status(404).send("Log not found");
        }
    })
};

exports.patchById = function (request, response) {
    if (request.body._id) {
        delete request.body._id;
    }

    for (var i in request.body) {
        request.log[i] = request.body[i];
    }

    request.log.save(function (error) {
        if (error) {
            response.status(500).send(error);
        } else {
            response.json(request.log);
        }
    });
};