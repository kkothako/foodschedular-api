const express = require('express');
const router = express.Router();

const restaurantProtienController = require('../controller/restaurant-menu-protien.controller');

router.post('/restaurantProtien', restaurantProtienController.createrestaurantProtiens);
router.get('/restaurantProtien', restaurantProtienController.getAllProtiens);

module.exports = router;