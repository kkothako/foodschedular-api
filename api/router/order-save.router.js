const express = require('express');
const router = express.Router();

const orderSaveController = require('../controller/order-save.controller');

router.post('/orderSave', orderSaveController.createorderSaves);

module.exports = router;