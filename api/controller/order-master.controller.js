const mongoose = require('mongoose');
const orderMasterModel = require('../model/order-master.model');
const orderid = require('order-id')('mysecret');

exports.createMasterOrder = ((request, response) => {

    const id = orderid.generate();
    const locorderMasterModel = new orderMasterModel(request.body);
    locorderMasterModel.orderId = id;

    locorderMasterModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
});

