const mongoose = require('mongoose');
const orderMasterModel = require('../model/order-master.model');
const orderid = require('order-id')('mysecret');

const orderHistoryController = require('../controller/order-history.controller');


exports.createOrderMaster = ((request, response) => {

    const id = orderid.generate();
    const orderderMasterModel = new orderMasterModel(request.body.orderMaster);
    orderderMasterModel.orderId = id;

    orderderMasterModel.save((error, result) => {
       
        if (error) {
            return response.json({ status: false, error: error });
        }

         orderHistoryController.createOrderHistory(request, response)

        return response.json({ status: true, data: result });
    })
});

