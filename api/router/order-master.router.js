const express = require('express');
const router = express.Router();

const orderMasterController = require('../controller/order-master.controller');

router.post('/orderMaster', orderMasterController.createMasterOrder);

module.exports = router;