const mongoose = require('mongoose');
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
        userId: ObjectId(request.params.userId),
        profileId: ObjectId(request.params.profileId)
    };
    orderDraftModel.find(filter, (error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});