const express = require('express');
const router = express.Router();

const profileController = require('../controller/profile.controller');

router.post('/createProfile', profileController.createProfile);

module.exports = router;    