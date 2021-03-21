const mongoose = require('mongoose');
const orderDraftModel = require('../model/order-draft.model');

exports.createDraftOrder = ((request, response) => {

    const locOrderDraftModel = new orderDraftModel(request.body);
    locOrderDraftModel.id = new mongoose.Types.ObjectId;

    locOrderDraftModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});

exports.getOrderByProfileID = ((request, response) => {

    const filter = { userId: ObjectId(request.params.userId),
                     profileId: ObjectId(request.params.profileId) };
    orderDraftModel.find(filter, (error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});