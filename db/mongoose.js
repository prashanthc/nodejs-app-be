const config = require('../config/app.config');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.mongodb.mongodbConnectionURI, { useCreateIndex: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../model/user.model'),
    Task: require('../model/task.model')
};