define(function (require) {

    'use strict';

    var angular = require("angular");

    require("ngRoute");
    require("./services");
    require("./animations");
    require("./controllers");
    require("./filters");

    var appsModule = angular.module('appsModule', [
        'ngRoute', 'appsServices', 'appsAnimations', 'appsControllers', 'appsFilters'
    ]);

    appsModule.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/apps', {
                    templateUrl: '/app/modules/apps/list.html',
                    controller: 'AppListCtrl'
                })
                .when('/apps/:appId', {
                    templateUrl: '/app/modules/apps/details.html',
                    controller: 'AppDetailCtrl'
                });
        }]);

    return appsModule;
});