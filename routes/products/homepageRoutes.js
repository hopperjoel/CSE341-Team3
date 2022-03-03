/****************************************************
 * Homepage Routes
 ***************************************************/
const express = require('express');
const homepageController = require('../../controllers/products/homepageController');

const router = express.Router();

/****************************************************
 * GET Routes
 ****************************************************/
router.get('/home', homepageController.getHomepage);

/****************************************************
 * POST Routes
 ****************************************************/
module.exports = router;