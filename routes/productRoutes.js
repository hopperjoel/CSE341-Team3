/****************************************************
 * Product Routes
 ***************************************************/
const express = require('express');
const productsController = require('../controllers/productController');
const middleware = require('../middleware/is-auth')

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
router.get('/cart', middleware, productsController.getCart);
router.post('/cart', middleware, productsController.postCart);
module.exports = router;