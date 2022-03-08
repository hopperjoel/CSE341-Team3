/****************************************************
 * Product Routes
 ***************************************************/
const express = require('express');
const productsController = require('../controllers/products/productController');

const router = express.Router();

/****************************************************
 * GET Routes
 ****************************************************/
router.get('/home', homepageController.getHomepage);
router.get('/products', productsController.getProducts);

/****************************************************
 * POST Routes
 ****************************************************/

// Linds***
//  router.post('/cart', isAuth, productController.postCart);

//  router.post('/cart-delete-item', isAuth, productController.postCartDeleteProduct);
 
//  router.post('/create-order', isAuth, productController.postOrder);

module.exports = router;