// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var config = require('./config');
var dgram = require('dgram');
var log = require('./log');
var parser = require('./parser');

module.exports = function () {
    // create UDP server, returns server instance
    // UDP can only be used to publish messages, message subscription is not supported.
    // "maxFrameSize" is not used because UDP packets always have limited size.
    exports.createServer = function (port, maxFrameSize) {

        var udpServer = dgram.createSocket('udp4');

        udpServer.on('listening', function () {
            log.info(
                'UDP server listening at %s:%d',
                udpServer.address().address,
                udpServer.address().port
            );
        });

        udpServer.on('message', function (msg, requestInfo) {
            try {
                //var logMessage = JSON.parse(msg);
                persist.make(parser.make(msg.toString('utf8')));
            } catch (e) {
                log.warn(e);
            }
        });

        udpServer.on('error', function (exception) {
            log.error('UDP Server encountered error: %j', exception);
            udpServer.close();
        });

        udpServer.on('close', function () {
            log.info('UDP Server closed');
            udpServer.close();
        });

        udpServer.bind(port, '127.0.0.1');
        return udpServer;
    };
};
