const express = require('express');
const router = express.Router();

const allergyController = require('../controller/allergy.controller');

router.post('/allergy', allergyController.createAllergy)
.post('/allergy/getallallergys', allergyController.getAllAllergys);

module.exports = router;