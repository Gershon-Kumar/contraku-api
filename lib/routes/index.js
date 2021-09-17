const express = require("express");
const router = express.Router();

const registrationRoute = require("./registration");
const workSiteRoute = require("./work-site");

router.use("/registration", registrationRoute);
router.use("/work-site", workSiteRoute);

module.exports = router;
