const express = require('express');
const router = express.Router();

const orderMasterController = require('../controller/order-master.controller');

router.post('/orderMaster', orderMasterController.createOrderMaster);

module.exports = router;