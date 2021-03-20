const mongoose = require('mongoose');
const restaurantProtienModel = require('../model/restaurant-menu-protien.model');

exports.createrestaurantProtiens = ((request, response) => {

    const locrestaurantProtienModel = new restaurantProtienModel(request.body);
    locrestaurantProtienModel.ProtienID = new mongoose.Types.ObjectId;

    locrestaurantProtienModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    });
});

exports.getAllProtiens = ((request, response)=>{
    restaurantProtienModel.find({}, (error, protiens)=>{
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: protiens });
    });
});