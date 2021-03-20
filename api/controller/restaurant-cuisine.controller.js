const mongoose = require('mongoose');
const restaurantCuisineModel = require('../model/restaurant-cuisine.model');

exports.createrestaurantCuisines = ((request, response) => {

    const locrestaurantCuisineModel = new restaurantCuisineModel(request.body);
    locrestaurantCuisineModel.cuisineID = new mongoose.Types.ObjectId;

    locrestaurantCuisineModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});

exports.getAllCuisines = ((request, response) => {

    restaurantCuisineModel.find({}, (error, cusines) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: cusines });
    });
});