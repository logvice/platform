var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/logs');

var db = mongoose.connection;

db.on('error', function () {
    console.log("We can't find MongoDB to connect. Check if mongodb is running OR the configuration is wrong.");
});

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var logModel = require('./models/logModel');
var appModel = require('./models/appModel');

var logRouters = require('./routes/logRoutes')(logModel);
var appRouters = require('./routes/appRoutes')(appModel);

app.use('/logs', logRouters);
app.use('/apps', appRouters);

var port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log('Server restart and listening to port: ' + port);
});