const mongoose = require('mongoose')
const env = require('../config/env')

let mongDb = mongoose.connect(env.mongoUrl,{useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongDb;
