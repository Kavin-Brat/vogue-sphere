const express = require("express");
const router = express.Router();
const { dashboardController } = require("../controllers/index");

// Dashboard routes
router.get("/product", dashboardController.getProduct);

module.exports = router;
