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

// Linds***
//  router.post('/cart', isAuth, productController.postCart);

//  router.post('/cart-delete-item', isAuth, productController.postCartDeleteProduct);
 
//  router.post('/create-order', isAuth, productController.postOrder);

module.exports = router;