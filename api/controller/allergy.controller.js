const mongoose = require('mongoose');
const allergyModel = require('../model/allergy.model');

exports.createAllergy = ((request, response) => {

    const locAllergyModel = new allergyModel(request.body);
    locAllergyModel.allergyID = new mongoose.Types.ObjectId;

    locAllergyModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});

exports.getAllAllergys = ((request, response) => {

    allergyModel.find({}, (error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    });
});