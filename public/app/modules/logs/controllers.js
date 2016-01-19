define(function (require) {

    'use strict';

    var angular = require("angular");

    var logControllers = angular.module('logsControllers', []);

    logControllers.controller('LogListCtrl', ['$scope', 'Phone',
        function ($scope, Phone) {
            $scope.phones = Phone.query();
            $scope.orderProp = 'age';
        }]);

    logControllers.controller('LogDetailCtrl', ['$scope', '$routeParams', 'Phone',
        function ($scope, $routeParams, Phone) {

            $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
                $scope.mainImageUrl = phone.images[0];
            });

            $scope.setImage = function (imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
        }]);

    return logControllers;
});