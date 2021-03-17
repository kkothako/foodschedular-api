const mongoose = require('mongoose');
const orderSaveModel = require('../model/order-save.model');

exports.createorderSaves = ((request, response) => {

    const locorderSaveModel = new orderSaveModel(request.body);
    locorderSaveModel.id = new mongoose.Types.ObjectId;

    locorderSaveModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
})