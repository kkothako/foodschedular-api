const express = require('express');
const router = express.Router();

const restaurantTimingsController = require('../controller/restaurant-timings.controller');

router.post('/restaurantTimings', restaurantTimingsController.createrestaurantTimings)
.post('/restaurantTimings/getAllRestaurentMenusAndTimings', restaurantTimingsController.getAllRestaurentMenusAndTimings);

module.exports = router;