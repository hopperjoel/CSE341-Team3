// Routes for all things pertaining to the cart and orders
const express = require('express');
const cartController = require('../../controllers/admin/cartController');

const router = express.Router();

/****************************************************
 * GET Methods
 ****************************************************/
router.get('/cart', cartController.getCart);

/****************************************************
 * POST Methods
 ****************************************************/

module.exports = router;