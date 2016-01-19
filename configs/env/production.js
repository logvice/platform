"use strict";
module.exports = {
    // tcp listening port
    tcpPort: 80,
    // web socket listening port
    wsPort: 8080,
    // udp listening port, udp can only be used to publish messages
    udpPort: 514,
    // max size of message frame, in chars(not bytes)
    maxFrameSize: 10000,
    // log level
    logLevel: Infinity,
    // colored output
    coloredOutput: true,
    // database config
    dbHost: "localhost",
    dbPort: 27017,
    dbName: "logvice",
    dbCollection: "logs"
};