const express = require("express");
const router = express.Router();
const { authController } = require("../controllers/index");

// Auth routes
router.post("/", authController.login);

module.exports = router;
