"use strict";

module.exports = {
    host: '127.0.0.1',
    // tcp listening port
    port: 3000,
    // udp listening port, udp can only be used to publish messages
    udpPort: 514,
    // max size of message frame, in chars(not bytes)
    maxFrameSize: 10000,
    // log level
    logLevel: Infinity,
    // colored output
    coloredOutput: true,
    // database config
    dbHost: 'localhost',
    dbPort: 27017,
    dbName: 'logvice',
    dbCollection: 'logs',
    //session secret
    sessionSecret: 'developmentSessionSecret'
};