define(function (require) {

    'use strict';

    var angular = require("angular");

    var authControllers = angular.module('authControllers', []);

    authControllers.controller('AuthLoginCtrl', ['$scope',
        function ($scope) {

        }
    ]);

    authControllers.controller('AuthRegisterCtrl', ['$scope',
        function ($scope) {

        }
    ]);

    authControllers.controller('AuthForgotCtrl', ['$scope',
        function ($scope) {

        }
    ]);

    return authControllers;
});