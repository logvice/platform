var logController = function (logModel) {

    var get = function (request, response) {
        logModel.find(request.query, function (error, logs) {
            if (error){
                response.status(500).send(error);
            } else {
                response.json(logs);
            }
        });
    };

    var post = function (request, response) {
        var log = new logModel(request.body);
        log.save(function (error) {
            if (error){
                response.status(500).send(error);
            } else {
                response.status(201).send(log);
            }
        });
    };

    var getById = function (request, response) {
        response.json(request.log);
    };

    var patchById = function (request, response) {
        if (request.body._id){
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

    return {
        get: get,
        post: post,
        getById: getById,
        patchById: patchById
    }
};

module.exports = logController;