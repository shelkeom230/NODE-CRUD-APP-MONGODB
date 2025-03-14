const express = require('express') 
const router = express.Router()
const Product = require('../models/product.model.js');
const {getProducts, getProduct,createProduct,updateProduct,deleteProduct} = require('../controllers/product.controller.js');

// get all products 
router.get("/",getProducts);
// get product by id 
router.get("/:id",getProduct);
// add a product 
router.post("/",createProduct);
// update a product by id 
router.put("/:id",updateProduct);
// delete a product by id 
router.delete("/:id",deleteProduct);


module.exports = router;