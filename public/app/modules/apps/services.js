define(function (require) {

    'use strict';

    var angular = require("angular");

    require("ngResource");

    var appsServices = angular.module('appsServices', ['ngResource']);

    appsServices.factory('Apps', ['$resource',
        function ($resource) {
            return $resource('apps/:phoneId.json', {}, {
                query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
            });
        }]);

    return appsServices;
});