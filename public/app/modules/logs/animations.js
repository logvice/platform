define(function (require) {

    'use strict';

    var angular = require("angular");

    require("ngAnimate");

    var logsAnimations = angular.module('logsAnimations', ['ngAnimate']);

    logsAnimations.animation('.phone', function () {

        var animateUp = function (element, className, done) {

            if (className !== 'active') {
                return;
            }

            element.css({
                position: 'absolute',
                top: 500,
                left: 0,
                display: 'block'
            });

            var jQuery = require("jQuery");

            jQuery(element).animate({
                top: 0
            }, done);

            return function (cancel) {
                if (cancel) {
                    element.stop();
                }
            };
        };

        var animateDown = function (element, className, done) {

            if (className !== 'active') {
                return;
            }

            element.css({
                position: 'absolute',
                left: 0,
                top: 0
            });

            var jQuery = require("jQuery");

            jQuery(element).animate({
                top: -500
            }, done);

            return function (cancel) {
                if (cancel) {
                    element.stop();
                }
            };
        };

        return {
            addClass: animateUp,
            removeClass: animateDown
        };
    });

    return logsAnimations;
});