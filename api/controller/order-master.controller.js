const mongoose = require('mongoose');
const orderMasterModel = require('../model/order-master.model');
const orderid = require('order-id')('mysecret');

const orderHistoryController = require('../controller/order-history.controller');
const emailController = require('../controller/email.controller');
const userAccountModel = require('../model/user-account-registration.model');
const emailModelSchema = require('./../model/email.model');

exports.createOrderMaster = ((request, response) => {

    const id = orderid.generate();
    const orderderMasterModel = new orderMasterModel(request.body.request.orderMaster);
    orderderMasterModel.orderId = id;
    
    orderderMasterModel.save((error, result) => {

        if (error) {
            return response.json({ status: false, error: error });
        }

        orderHistoryController.createOrderHistory(request, response);
        request.body.request.orderMaster.orderId = id;
        this.sendOrderConfirmationEmail(request, response);

        return response.json({ status: true, data: result });
    })
});

exports.sendOrderConfirmationEmail = ((request, response) => {
  console.log('**************************',request.body.request.orderMaster)
    userAccountModel.findOne({ id: request.body.request.orderMaster.userId }, (error, userAccount) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        const emailModel = new emailModelSchema();
        emailModel.to = userAccount.email;
        emailModel.bcc = 'foodschedule126@gmail.com';
        emailModel.subject = "Order Submited Successfully!";
        emailModel.body = ` Dear Sir/Madam(${userAccount.role}), <br/>
                            This is auto generated email and please do not reply back. <br/>
                            We are successfully submited your order and the order number: <b>${request.body.request.orderMaster.orderId}</b> .
                            <br/>
                            <br/>
                            <br/> 
                            Thanks & Regards,
                            <br/> 
                            FoodSchedular Help Desk
    `
        request.body = emailModel;

        return emailController.sendEmail(request, response);
    });

});

