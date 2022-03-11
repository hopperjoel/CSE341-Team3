/****************************************************
 * Admin Routes
 ***************************************************/
const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

/****************************************************
 * GET Routes
 ****************************************************/

router.get('/edit-product', adminController.getEditProduct);

/****************************************************
 * POST Routes
 ****************************************************/

 router.put('/add-product', adminController.putAddProduct);
 router.post('/edit-product', adminController.postEditProduct);
 router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;