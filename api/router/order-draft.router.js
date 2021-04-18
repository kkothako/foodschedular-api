const express = require('express');
const router = express.Router();

const orderDraftController = require('../controller/order-draft.controller');

router.post('/orderDraft', orderDraftController.createDraftOrder)
.post('/orderDraft/getOrderByProfileID', orderDraftController.getOrderByProfileID)
.post('/orderDraft/deleteDraftOrderByProileId', orderDraftController.deleteDraftOrderByProileId);


module.exports = router;