const mongoose = require('mongoose');
const restaurantModel = require('../model/restaurant.model');

exports.createrestaurants = ((request, response) => {

    const locrestaurantModel = new restaurantModel(request.body);
    locrestaurantModel.RestaurantID = new mongoose.Types.ObjectId;

    locrestaurantModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
})