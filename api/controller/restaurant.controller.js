const mongoose = require('mongoose');
const restaurantModel = require('../model/restaurant.model');

exports.createrestaurants = ((request, response) => {

    const locrestaurantModel = new restaurantModel(request.body);
    locrestaurantModel.restaurantId = new mongoose.Types.ObjectId;

    locrestaurantModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});

exports.getRestorentDetailsByCusineIdAndZipCode = ((request, response) => {

    const restorentModel = restaurantModel.find({ cuisineID: request.body.cuisineID }).sort({'customerRatings':1 });
    restorentModel.exec((error, restorents) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: restorents[0] });

    })
});