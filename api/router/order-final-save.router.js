const express = require('express');
const router = express.Router();

const orderFinalSaveController = require('../controller/order-final-save.controller');

router.post('/orderFinalSave', orderFinalSaveController.createorderFinalSaves);

module.exports = router;