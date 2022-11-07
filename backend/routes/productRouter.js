//bring getproducts function from the productController
const { getProducts } = require("../controllers/productController");
const express = require("express");
const router = express.Router();
router.get("/", getProducts);
module.exports = router;
