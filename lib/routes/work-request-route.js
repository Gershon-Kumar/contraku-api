const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth-middleware");
const workrequestController = require('../controllers/work-request-controller')

router.post(
  "/make-request",
  auth.employeeAuth,
	workrequestController.makeRequest
);

module.exports = router;
