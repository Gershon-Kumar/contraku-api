const express = require('express')
const router = express.Router()

const registrationController = require('../controllers/registration')

router.get('/contraku-signup',registrationController.contrakuSignup)

module.exports = router