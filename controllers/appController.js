var appController = function (appModel) {

    var get = function (request, response) {
        appModel.find(request.query, function (error, logs) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.json(logs);
            }
        });
    };

    var post = function (request, response) {
        var log = new appModel(request.body);
        log.save(function (error) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.status(201).send(log);
            }
        });
    };

    var getById = function (request, response) {
        response.json(request.app);
    };

    var patchById = function (request, response) {
        if (request.body._id){
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

    var deleteById = function (request, response) {
        request.app.remove(function (error) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.status(204).send('Removed');
            }
        });
    };

    return {
        get: get,
        post: post,
        getById: getById,
        patchById: patchById,
        deleteById: deleteById
    }
};

module.exports = appController;