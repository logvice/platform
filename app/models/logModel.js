var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var logModel = new Schema({
    appId: {type: String, trim: true},
    channel: {type: String, trim: true},
    message: {type: String, trim: true},
    severity: {type: Number},
    host: {type: String, trim: true},
    protocol: {type: String, trim: true},
    extras: {type: mongoose.Schema.Types.Mixed},
    processId: {type: Number},
    messageId: {type: Number},
    created: {type: Date, default: Date.now},
    update: {type: Date, default: Date.now},
    counter: {type: Number, default: 0, trim: true},
    fixed: {type: Boolean, default: false, trim: true},
    transport: {type: String, trim: true}
});

module.exports = mongoose.model('LogModel', logModel);