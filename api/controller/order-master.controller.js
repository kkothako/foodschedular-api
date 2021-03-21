const mongoose = require('mongoose');
const orderMasterModel = require('../model/order-master.model');

exports.createMasterOrder = ((request, response) => {

    const locorderMasterModel = new orderMasterModel(request.body);
    locorderMasterModel.id = new mongoose.Types.ObjectId;

    locorderMasterModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});

