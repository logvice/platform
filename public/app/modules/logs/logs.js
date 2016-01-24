define(function (require) {

    'use strict';

    var angular = require("angular");

    require("ngRoute");
    require("./services");
    require("./controllers");
    require("./filters");

    var logsModule = angular.module('logsModule', [
        'ngRoute', 'logsServices', 'logsControllers', 'logsFilters'
    ]);

    logsModule.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/logs', {
                    templateUrl: '/app/modules/logs/list.html',
                    controller: 'LogListCtrl'
                })
                .when('/logs/:logId', {
                    templateUrl: '/app/modules/logs/detail.html',
                    controller: 'LogDetailCtrl'
                });
        }]);

    return logsModule;
});