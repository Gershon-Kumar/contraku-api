const express = require("express");
const router = express.Router();

const registrationRoute = require("./registration");

router.use("/registration", registrationRoute);

module.exports = router;
