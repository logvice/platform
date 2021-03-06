"use strict";

module.exports = {
    port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
    host: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    // udp listening port, udp can only be used to publish messages
    udpPort: 514,
    // max size of message frame, in chars(not bytes)
    maxFrameSize: 10000,
    // log level
    logLevel: Infinity,
    // colored output
    coloredOutput: true,
    // database config
    mongoDbURL: 'mongodb://admin:VaA9geiAUd9Z@' + process.env.OPENSHIFT_MONGODB_DB_URL + 'dev',
    //session secret
    sessionSecret: 'developmentSessionSecret'
};