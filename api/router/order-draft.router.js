const express = require('express');
const router = express.Router();

const orderFinalSaveController = require('./../controller/orders-draft.controller');

router.post('/orders_draft', orderFinalSaveController.createDraftOrder);

module.exports = router;