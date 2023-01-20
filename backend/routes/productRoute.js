const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/productController");
const router = express.Router();




// Create Product
router.route("/product/new").post(createProduct);


// Get All Products
router.route("/products").get(getAllProducts);




module.exports = router