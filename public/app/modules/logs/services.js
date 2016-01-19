define(function (require) {

    'use strict';

    var angular = require("angular");

    require("ngResource");

    var logServices = angular.module('logsServices', ['ngResource']);

    logServices.factory('Log', ['$resource',
        function ($resource) {
            return $resource('logs/:logId.json', {}, {
                query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
            });
        }]);

    return logServices;
});