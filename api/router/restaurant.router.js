const express = require('express');
const router = express.Router();

const restaurantController = require('../controller/restaurant.controller');

router.post('/restaurant', restaurantController.createrestaurants);

module.exports = router;