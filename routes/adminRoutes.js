/****************************************************
 * Admin Routes
 ***************************************************/
const express = require('express')
const adminController = require('../controllers/adminController');

const router = express.Router()

/****************************************************
 * GET Routes
 ****************************************************/
<<<<<<< HEAD
router.get('/admin-products', adminController.getProducts);

router.get('/edit-product', adminController.getEditProduct);

router.get('/cart', adminController.getCart);
=======

router.get('/edit-product', adminController.getEditProduct);
>>>>>>> 0e96dd4 (Changed routes and adminController functions)

/****************************************************
 * POST Routes
 ****************************************************/

 router.put('/add-product', adminController.getAddProduct);
 router.post('/edit-product', adminController.postEditProduct);
 router.post('/delete-product', adminController.postDeleteProduct);

// Linds***
//  router.post('/delete-product', isAuth, adminController.postDeleteProduct);
router.put('/add-product', adminController.putAddProduct);
module.exports = router;