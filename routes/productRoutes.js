/****************************************************
 * Product Routes
 ***************************************************/
const express = require('express');
const productsController = require('../controllers/productController');

const router = express.Router();

/****************************************************
 * GET Routes
 ****************************************************/
router.get('/home', productsController.getHomepage);
router.get('/products', productsController.getProducts);
router.get('/description', productsController.getProdDesc);

/****************************************************
 * POST Routes
 ****************************************************/

module.exports = router;