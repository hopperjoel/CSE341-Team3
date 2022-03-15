/****************************************************
 * Admin Routes
 ***************************************************/
const express = require('express');
const adminController = require('../controllers/adminController');
const middleware = require('../middleware/is-auth')

const router = express.Router();

/****************************************************
 * GET Routes
 ****************************************************/

router.get('/edit-product', middleware, adminController.getEditProduct);

/****************************************************
 * POST Routes
 ****************************************************/

 router.put('/add-product', middleware,  adminController.putAddProduct);
 router.post('/edit-product', middleware,  adminController.postEditProduct);
 router.post('/delete-product', middleware, adminController.postDeleteProduct);

module.exports = router;