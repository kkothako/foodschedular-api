const express = require('express');
const router = express.Router();

const restaurantCuisineController = require('../controller/restaurant-cuisine.controller');

router.post('/restaurantCuisine', restaurantCuisineController.createrestaurantCuisines)
.post('/restaurantCuisine/getallcuisines', restaurantCuisineController.getAllCuisines);

module.exports = router;