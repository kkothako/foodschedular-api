const express = require('express');
const router = express.Router();

const restaurantController = require('../controller/restaurant.controller');

router.post('/restaurant', restaurantController.createrestaurants)
.post('/restaurant/getRestorentDetailsByCusineIdAndZipCode', restaurantController.getRestorentDetailsByCusineIdAndZipCode)
.post('/restaurant/getAllRestorentsByCuisineIds', restaurantController.getAllRestorentsByCusineIds);

module.exports = router;