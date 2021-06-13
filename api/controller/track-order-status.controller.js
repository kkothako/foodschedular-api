const mongoose = require('mongoose');
const TrackOrderStatusModel = require('../model/track-order-status.model');

exports.createTrackOrderStatus = ((request, response) => {

    const locTrackOrderStatusModel = new TrackOrderStatusModel(request.body);
    locTrackOrderStatusModel.id = new mongoose.Types.ObjectId;

    locTrackOrderStatusModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});
