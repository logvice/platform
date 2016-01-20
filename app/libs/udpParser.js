"use strict";

(function () {
    var log = require('./log');

    /**
     * TODO persist to mongodb
     * @param message
     */
    var make = function (message) {
        if(message.indexOf('Buffer')){
            //return JSON.parse(message.toString('utf8'));
            return message.toString('utf8');
        }

        return message;
    };

    module.exports = {
        make: make
    };

}());
