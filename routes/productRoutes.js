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
router.get('/search', productsController.searchProduct);
router.get('/cart', middleware, productsController.getCart);

/****************************************************
 * POST Routes
 ****************************************************/
router.post('/cart', middleware, productsController.postCart);

/****************************************************
 * DELETE Routes
 ****************************************************/
router.delete('/cart', middleware, productsController.deleteFromCart);

module.exports = router;