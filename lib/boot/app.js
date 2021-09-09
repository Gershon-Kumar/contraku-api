const express = require('express')
const db = require('./db')
const env = require('../config/env')

const app = express()
const route = require('../routes/index')

app.use('/api',route)

app.listen(env.port,() => {
    console.log(`🔥 Server started at : ${env.port}`)
})