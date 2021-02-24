const express = require('express');
const router = express.Router();

const preferencesController = require('../controller/preferences.controller');

router.post('/preferences', preferencesController.createPrefereces);

module.exports = router;