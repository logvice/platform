define(function (require) {

    'use strict';

    var angular = require("angular");

    var commonModule = angular.module("commonModule", []);

    commonModule.controller("MenuController", function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });

    return commonModule;
});