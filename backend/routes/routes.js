const express = require("express");
const router = express.Router();
const addressController = require("../controllers/addressController");

router.post("/addresses", addressController.addAddress);

router.get(
  "/addresses/:address/transactions",
  addressController.getTransactions
);

router.get("/addresses/:address/analysis", addressController.analyzeAddress);

module.exports = router;
