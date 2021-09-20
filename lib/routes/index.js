const express = require("express");
const router = express.Router();

const registrationRoute = require("./registration");
const workSiteRoute = require("./work-site");
const workRequestRoute = require("./work-request-route");

router.use("/registration", registrationRoute);
router.use("/work-site", workSiteRoute);
router.use("/work-request", workRequestRoute);

module.exports = router;
