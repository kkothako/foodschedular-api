const express = require('express');
const router = express.Router();

const preferencesController = require('../controller/preferences.controller');

router.post('/createPreferences', preferencesController.createPrefereces);

module.exports = router;