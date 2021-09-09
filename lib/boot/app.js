const express = require('express')
const app = express()
const env = require('../config/env')
const route = require('../routes/index')

require('./db')
require('../middleware/setup-middleware')(app)

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
   
app.use('/api',route)

app.listen(env.port,() => {
    console.log(`🔥 Server started at : ${env.port}`)
})