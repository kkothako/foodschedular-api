const express = require('express');
const router = express.Router();

const orderDraftController = require('../controller/order-draft.controller');

router.post('/orderDraft', orderDraftController.createDraftOrder);
router.post('/orderDraft/getOrderByProfileID', orderDraftController.getOrderByProfileID);

module.exports = router;