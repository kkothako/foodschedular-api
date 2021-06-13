const mongoose = require('mongoose');
const TrackOrderModel = require('../model/track-order.model');

exports.createTrackOrder = ((request, response) => {

    const locTrackOrderModel = new TrackOrderModel(request.body);
    locTrackOrderModel.id = new mongoose.Types.ObjectId;

    locTrackOrderModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});
