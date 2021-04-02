const express = require('express');
const router = express.Router();

const preferencesController = require('../controller/user-preferences.controller');

router.post('/createPreferences', preferencesController.createPrefereces)
.get('/getPreferences/:userId', preferencesController.getPreferencesByUserId);

module.exports = router;