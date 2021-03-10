const mongoose = require('mongoose');
const restaurantTimingsModel = require('../model/restaurant-timings.model');

exports.createrestaurantTimings = ((request, response) => {

    const locrestaurantTimingsModel = new restaurantTimingsModel(request.body);
    locrestaurantTimingsModel.ID = new mongoose.Types.ObjectId;

    locrestaurantTimingsModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
})