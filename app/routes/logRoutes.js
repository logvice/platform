var express = require('express');

module.exports = function(app) {

    var logController = require('../controllers/logController');

    logRouters.use('/:id', function (request, response, next) {
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
    });

    logRouters.route('/')
        .get(logController.get)
        .post(logController.post);

    logRouters.route('/:id')
        .get(logController.getById)
        .patch(logController.patchById);

    return logRouters;
};

module.exports = routers;