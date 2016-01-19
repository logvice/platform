define(function (require) {

    'use strict';

    var angular = require("angular");

    require("./modules/pages/pages");
    require("./modules/logs/logs");
    require("./modules/auth/auth");
    require("./modules/apps/apps");
    require("./modules/common/common");

    return angular.module('logViceApp', ['pagesModule', 'logsModule', 'authModule', 'appsModule', 'commonModule']);
});