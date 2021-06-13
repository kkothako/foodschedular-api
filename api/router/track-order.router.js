const express = require('express');
const router = express.Router();

const trackOrderController = require('../controller/track-order.controller');

router.post('/trackOrder', trackOrderController.createTrackOrder);

module.exports = router;