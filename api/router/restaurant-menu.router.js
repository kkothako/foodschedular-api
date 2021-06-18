const express = require('express');
const router = express.Router();

const restaurantMenuController = require('../controller/restaurant-menu.controller');

router.post('/restaurantMenu', restaurantMenuController.createrestaurantMenus)
.post('/restaurantMenu/getRestorentMenuByProteinIdAndRestorentId', restaurantMenuController.getRestorentMenuByProteinIdAndRestorentId)
.post('/restaurantMenu/getRestorentMenusBy', restaurantMenuController.getAllRestorentMenusByRestorentIdAndProtienId);

module.exports = router;