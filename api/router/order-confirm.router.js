const express = require('express');
const router = express.Router();

const orderConfirmController = require('../controller/order-confirm.controller');

router.post('/orderConfirm', orderConfirmController.createConfirmOrder);

module.exports = router;