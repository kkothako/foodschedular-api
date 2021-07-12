const mongoose = require('mongoose');

const orderHistory = require('../model/order-history.model');


exports.createOrderHistory = ((request, response) => {
    const orderHistoryModel = new orderHistory();
    orderHistoryModel.collection.insertMany(request.body.request.orders, (error, order) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        console.log("Document inserted succussfully!");
    })
});

exports.getOrderHistoryBy = ((request, response) => {

    const filter = {
        'restaurentId':'6068cea6dd5f9555bcc568a1'
    };
    console.log(filter)
    orderHistory.find({})
    .exec((error, orders)=>{
        console.log(orders)

        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: orders });
    })
    



});