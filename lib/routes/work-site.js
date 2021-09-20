const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth-middleware");
const workSiteController = require("../controllers/work-site-controller");

router.post("/create", auth.contrakuAuth, workSiteController.create);
router.get("/list", auth.contrakuAuth, workSiteController.list);

module.exports = router;
