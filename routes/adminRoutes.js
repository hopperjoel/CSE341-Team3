/****************************************************
 * Admin Routes
 ***************************************************/
const express = require('express')
const adminController = require('../controllers/admin/adminController');

const router = express.Router()

/****************************************************
 * GET Routes
 ****************************************************/
router.get('/admin-products', adminController.getProducts);
router.get('/add-product', adminController.getAddProduct);
router.get('/edit-product', adminController.getEditProduct);

router.get('/cart', cartController.getCart);

/****************************************************
 * POST Routes
 ****************************************************/
module.exports = router;