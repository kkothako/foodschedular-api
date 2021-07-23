const mongoose = require('mongoose');
const restaurantModel = require('../model/restaurant.model');
const axios = require('axios');

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

    const restorentModel = restaurantModel.find({ cuisineID: request.body.cuisineID }).sort({ 'customerRatings': 1 });
    restorentModel.exec((error, restorents) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: restorents[0] });

    })
});

exports.getAllRestorentsByCusineIds = ((request, response) => {

    const cuisineIds = request.body.cuisineIds.join(',');
    restaurantModel.find({ 'cuisineId': { $in: request.body.cuisineIds } },
        (error, restorents) => {
            if (error) {
                return response.json({ status: false, error: error });
            }
            return response.json({ status: true, data: restorents });
        });
});
exports.getAllRestorentsByZipCodes = ((request, response) => {

    restaurantModel.find({ 'address.zipCode': { $in: request.body.zipCodes } },
        (error, restorents) => {
            if (error) {
                return response.json({ status: false, error: error });
            }
            return response.json({ status: true, data: restorents });
        });
});

exports.getAllZipCodesByCustomerZipCode = (async (request, response) => {

    //DuVBgSrIxkou6fZSIGW3qWaDS1B4eJRUuKgXKybsPAc1bHP0oDuojToPXlvZ4Rij
    //3t4Z999YThegEUEkKl29c5AlGoVbiuFuYeYdsUq1jhBjJIzB2bMaHPXKACKlgLLf
    const url = `https://www.zipcodeapi.com/rest/3t4Z999YThegEUEkKl29c5AlGoVbiuFuYeYdsUq1jhBjJIzB2bMaHPXKACKlgLLf/radius.json/${request.body.customerZipCode}/5/mile`;
    console.log(url);
    try {

        const result = await axios.post(url)
        return response.json({ status: false, data: result.data.zip_codes });
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }

});