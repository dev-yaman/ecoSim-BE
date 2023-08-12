const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');

router.post('/sign-up', authController.signup);
router.post('/login', authController.login);

module.exports = router;
