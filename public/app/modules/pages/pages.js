define(function (require) {

    'use strict';

    var angular = require("angular");

    require("ngRoute");

    var pagesModule = angular.module('pagesModule', ['ngRoute']);

    pagesModule.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/', {
                    templateUrl: '/app/modules/pages/home.html'
                })
                .when('/contact', {
                    templateUrl: '/app/modules/pages/contact.html'
                });
        }]);

    return pagesModule;
});