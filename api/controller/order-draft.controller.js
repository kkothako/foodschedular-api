const mongoose = require('mongoose');
const axios = require("axios");
const orderDraftModel = require('../model/order-draft.model');

exports.createDraftOrder = ((request, response) => {

    const locOrderDraftModel = new orderDraftModel(request.body);
    locOrderDraftModel.id = new mongoose.Types.ObjectId;

    const query = orderDraftModel.find({
        userId: request.body.userId,
        profileId: request.body.profileId,
        scheduledDate: request.body.scheduledDate
    })
    query.exec((error, results) => {
        if (results.length === 0) {
            locOrderDraftModel.save((error, result) => {
                if (error) {
                    return response.json({ status: false, error: error });
                }
                return response.json({ status: true, data: { status: true, data: result } });
            })
        } else {
            return response.json({
                status: true, data: {
                    data: null,
                    status: false,
                    message: 'The order been already schdeled for selected date:' + request.body.scheduledDate
                }
            });
        }
    })


});

exports.getOrderByProfileID = ((request, response) => {

    const filter = {
        userId: new mongoose.Types.ObjectId(request.body.userId),
        profileId: new mongoose.Types.ObjectId(request.body.profileId)
    };
    orderDraftModel.find(filter, (error, orders) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: orders });
    })
});

exports.deleteDraftOrderByOrderId = ((request, response) => {
    const filter = { id: request.body.orderId };
    orderDraftModel.findOneAndDelete(filter, (error, order) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: order });
    });
});

exports.getLangAndLatBy = (async (request, response) => {

    const baseUrl = 'https://www.freemaptools.com/ajax/us/get-zip-codes.php'
    const url = `${baseUrl}/?zip1=${request.body.customerZipCode}&zip2=${request.body.restorentZipCode}&rn=1477`;
    console.log(url);
    try {
        const result = await axios.get(url)

        var result1;
        var parser = require('xml2js');
        parser.Parser().parseString(result.data, (e, r) => { result1 = r });
  
        return result1.markers.marker;
    } catch (error) {
        console.log(error);
        return null;
    }

});

exports.getRestorentDistanceBy = async (request, response) => {

  try {
    const data = await this.getLangAndLatBy(request, response);
 
    const distanceModel = {
        lat1: data[0].$.lat,
        lat2: data[1].$.lat,
        lng1: data[0].$.lng,
        lng2: data[1].$.lng
    };

    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = +distanceModel.lat1 * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = +distanceModel.lat2 * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (+distanceModel.lng1 - +distanceModel.lng2) * (Math.PI / 180); // Radian difference (longitudes)

    var distance = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
 
    return await response.json({status: true, data: distance.toFixed(3)});
  } catch (error) {
      
  }
}