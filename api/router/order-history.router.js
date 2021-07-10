const express = require('express');
const router = express.Router();

const orderHistoryController = require('../controller/order-history.controller');

router.post('/orderhistory', orderHistoryController.createOrderHistory);

module.exports = router;


