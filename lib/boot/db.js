const mongoose = require('mongoose')
const env = require('../config/env')


let mongDb = mongoose.connect(env.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('💻 connected to db'))
    .catch(e => console.error(e))

module.exports = mongDb;
