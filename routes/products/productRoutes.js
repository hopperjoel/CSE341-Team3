/****************************************************
 * Product Routes
 ***************************************************/
const express = require('express');
const productsController = require('../../controllers/products/productController');

const router = express.Router();

/****************************************************
 * GET Routes
 ****************************************************/
router.get('/products', productsController.getProducts);

/****************************************************
 * POST Routes
 ****************************************************/
module.exports = router;