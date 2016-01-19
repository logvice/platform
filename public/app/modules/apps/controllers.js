define(function (require) {

    'use strict';

    var angular = require("angular");
    var appsControllers = angular.module('appsControllers', []);

    appsControllers.controller('AppListCtrl', ['$scope', 'Phone',
        function ($scope, Phone) {
            $scope.phones = Phone.query();
            $scope.orderProp = 'age';
        }]);

    appsControllers.controller('AppDetailCtrl', ['$scope', '$routeParams', 'Phone',
        function ($scope, $routeParams, Phone) {
            $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
                $scope.mainImageUrl = phone.images[0];
            });

            $scope.setImage = function (imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
        }]);

    return appsControllers;
});