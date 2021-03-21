const express = require('express');
const router = express.Router();

const orderDraftController = require('../controller/order-draft.controller');

router.post('/orderDraft', orderDraftController.createDraftOrder);

module.exports = router;