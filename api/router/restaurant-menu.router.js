const express = require('express');
const router = express.Router();

const restaurantMenuController = require('../controller/restaurant-menu.controller');

router.post('/restaurantMenu', restaurantMenuController.createrestaurantMenus);

module.exports = router;