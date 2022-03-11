/****************************************************
 * Admin Routes
 ***************************************************/
const express = require('express')
const adminController = require('../controllers/adminController');

const router = express.Router()

/****************************************************
 * GET Routes
 ****************************************************/
router.get('/admin-products', adminController.getProducts);

router.get('/edit-product', adminController.getEditProduct);

router.get('/cart', adminController.getCart);

/****************************************************
 * POST Routes
 ****************************************************/


router.put('/add-product', adminController.putAddProduct);
module.exports = router;