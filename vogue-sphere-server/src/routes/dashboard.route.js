const express = require("express");
const router = express.Router();
const { authController } = require("../controllers/index");

// Dashboard routes
router.get("/product", authController.getProduc);

module.exports = router;
