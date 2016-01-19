define(function (require) {

    'use strict';

    var angular = require("angular");

    var logsFilters = angular.module('logsFilters', []).filter('checkmark', function () {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    });

    return logsFilters;
});