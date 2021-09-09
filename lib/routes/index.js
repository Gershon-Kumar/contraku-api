const express = require('express')
const router = express.Router()

const homeRoute = require('./home')
const registrationRoute = require('./registration')

router.use('/home',homeRoute)
router.use('/registration',registrationRoute)

module.exports = router