define(function (require) {

    'use strict';

    var angular = require("angular");

    require("ngRoute");
    require("./controllers");

    var authModule = angular.module('authModule', ['ngRoute', 'authControllers']);

    authModule.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/login', {
                    templateUrl: '/app/modules/auth/login.html',
                    controller: 'AuthLoginCtrl'
                })
                .when('/register', {
                    templateUrl: '/app/modules/auth/register.html',
                    controller: 'AuthRegisterCtrl'
                })
                .when('/forgot', {
                templateUrl: '/app/modules/auth/forgot.html',
                controller: 'AuthResetCtrl'
            });
        }
    ]);

    return authModule;
});