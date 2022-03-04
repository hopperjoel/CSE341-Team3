/****************************************************
 * Login Routes
 ***************************************************/
const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

/****************************************************
 * GET Routes
 ****************************************************/
router.get('/login', loginController.getLogin);

/****************************************************
 * POST Routes
 ****************************************************/
module.exports = router;