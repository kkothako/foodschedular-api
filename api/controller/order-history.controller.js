const mongoose = require('mongoose');

const orderHistory = require('../model/order-history.model');


exports.createOrderHistory = ((request, response) => {
    const orderHistoryModel =  new orderHistory();
    orderHistoryModel.collection.insertMany(request.body.request.orders,(error, order) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        console.log("Document inserted succussfully!");
    })
});