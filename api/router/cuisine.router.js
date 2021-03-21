const express = require('express');
const router = express.Router();

const cuisineController = require('../controller/cuisine.controller');

router.post('/cuisine', cuisineController.createCuisine)
.post('/cuisine/getallcuisines', cuisineController.getAllCuisines);

module.exports = router;