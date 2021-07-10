const mongoose = require('mongoose');

const orderHistory = require('../model/order-history.model');


exports.createOrderHistory = ((request, response) => {

    const orderHistoryModel = new orderHistory(request.body);
    orderHistoryModel.save((error, order) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: order });
    })
});