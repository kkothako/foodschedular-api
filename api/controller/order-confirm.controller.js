const mongoose = require('mongoose');
const orderConfirmModel = require('../model/order-confirm.model');

exports.createConfirmOrder = ((request, response) => {

    const locorderConfirmModel = new orderConfirmModel(request.body);
    locorderConfirmModel.id = new mongoose.Types.ObjectId;

    locorderConfirmModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});

