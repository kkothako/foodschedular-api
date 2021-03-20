const express = require('express');
const router = express.Router();

const orderSaveController = require('../controller/orders.controller');

router.post('/orders', orderSaveController.createOrder);

module.exports = router;