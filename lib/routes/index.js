const express = require('express')
const router = express.Router()

const homeRoute = require('./home')

router.use('/home',homeRoute)

module.exports = router