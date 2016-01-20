var express = require('express');

var routers = function (appModel) {

    var appRouters = express.Router();
    var appController = require('../controllers/appController')(appModel);

    appRouters.use('/:id', function (request, response, next) {
        appModel.findById(request.params.id, function (error, app) {
            if (error) {
                response.status(500).send(error);
            } else if (log) {
                request.app = app;
                next();
            } else {
                response.status(404).send("App not found");
            }
        })
    });

    appRouters.route('/')
        .get(appController.get)
        .post(appController.post);

    appRouters.route('/:id')
        .get(appController.getById)
        .patch(appController.patchById)
        .delete(appController.deleteById);

    return appRouters;
};

module.exports = routers;