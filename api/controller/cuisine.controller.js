const mongoose = require('mongoose');
const cuisineModel = require('../model/cuisine.model');

exports.createCuisine = ((request, response) => {

    const locCuisineModel = new cuisineModel(request.body);
    locCuisineModel.cuisineID = new mongoose.Types.ObjectId;

    locCuisineModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});

exports.getAllCuisines = ((request, response) => {

    cuisineModel.find({}, (error, cusines) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: cusines });
    });
});