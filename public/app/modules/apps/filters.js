define(function (require) {

    'use strict';

    var angular = require("angular");

    var appsFilters = angular.module('appsFilters', []).filter('checkmark', function () {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    });

    return appsFilters;
});