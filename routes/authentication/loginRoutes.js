/****************************************************
 * Login Routes
 ***************************************************/
const express = require('express');
const loginController = require('../../controllers/authentication/loginController');

const router = express.Router();

/****************************************************
 * GET Routes
 ****************************************************/
router.get('/login', loginController.getLogin);

/****************************************************
 * POST Routes
 ****************************************************/
module.exports = router;