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
<<<<<<< HEAD
router.get('/cart', productsController.getCart);
=======
router.get('/description', productsController.getProdDesc);
>>>>>>> 0cb1a41fc3f93f4b934ddfe51ae4cee5922b3a98

/****************************************************
 * POST Routes
 ****************************************************/

// Linds***
//  router.post('/cart', isAuth, productController.postCart);

//  router.post('/cart-delete-item', isAuth, productController.postCartDeleteProduct);
 
//  router.post('/create-order', isAuth, productController.postOrder);

module.exports = router;