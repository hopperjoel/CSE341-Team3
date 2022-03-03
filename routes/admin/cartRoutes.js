/****************************************************
 * Cart Routes
 ***************************************************/
const express = require('express');
const cartController = require('../../controllers/admin/cartController');

const router = express.Router();

/****************************************************
 * GET Routes
 ****************************************************/
router.get('/cart', cartController.getCart);

/****************************************************
 * POST Routes
 ****************************************************/

module.exports = router;