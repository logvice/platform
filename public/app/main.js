(function () {

    'use strict';

    require.config({
        paths: {
            angular: "/assets/vendor/angular/angular.min",
            ngRoute: "/assets/vendor/angular/angular-route.min",
            ngAnimate: "/assets/vendor/angular/angular-animate.min",
            ngResource: "/assets/vendor/angular/angular-resource.min",
            jQuery: "/assets/vendor/jquery/jquery-1.11.3.min",
            app: "/app/app",
        },
        shim: {
            angular: {
                exports: "angular"
            },
            ngRoute: {
                deps: ["angular"],
                exports: 'ngRoute'
            },
            ngResource: {
                deps: ["angular"],
                exports: 'ngResource'
            },
            ngAnimate: {
                deps: ["angular"],
                exports: 'ngAnimate'
            },
            app: {
                deps: ["jQuery"],
                exports: 'app'
            }
        }
    });

    define(function (require) {

        var angular = require("angular");

        require("app");

        angular.bootstrap(document, ['logViceApp']);
    });

})();