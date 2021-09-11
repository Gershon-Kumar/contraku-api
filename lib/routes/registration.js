const express = require("express");
const router = express.Router();

const validator = require("../middleware/validators/registration-validation");
const registrationController = require("../controllers/registration");

router.post(
  "/contraku-signup",
  validator.contrakuSignupValidation,
  registrationController.contrakuSignup
);

module.exports = router;
