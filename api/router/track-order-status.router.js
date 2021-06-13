const express = require('express');
const router = express.Router();

const trackOrderStatusController = require('../controller/track-order-status.controller');

router.post('/trackOrderStatus', trackOrderStatusController.createTrackOrderStatus);

module.exports = router;