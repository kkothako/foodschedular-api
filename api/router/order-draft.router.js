const express = require('express');
const router = express.Router();

const orderDraftController = require('../controller/order-draft.controller');

router.post('/orderDraft', orderDraftController.createDraftOrder)
.post('/orderDraft/getOrderByProfileID', orderDraftController.getOrderByProfileID)
.post('/orderDraft/deleteDraftOrderByOrderId', orderDraftController.deleteDraftOrderByOrderId);


module.exports = router;