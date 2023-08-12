// lookup.route.js
const express = require('express');
const router = express.Router();
const lookupController = require('./lookup.controller');

router.get('/plans/:isoCode', lookupController.getPlansByIsoCode);

module.exports = router;
