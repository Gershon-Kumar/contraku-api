const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth-middleware");
const workSiteController = require("../controllers/work-site-controller");

router.post("/create", auth.contrakuAuth, workSiteController.create);

module.exports = router;
