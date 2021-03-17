const mongoose = require('mongoose');
const orderFinalSaveModel = require('../model/order-final-save.model');

exports.createorderFinalSaves = ((request, response) => {

    const locorderFinalSaveModel = new orderFinalSaveModel(request.body);
    locorderFinalSaveModel.id = new mongoose.Types.ObjectId;

    locorderFinalSaveModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
})