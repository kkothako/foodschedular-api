const mongoose = require('mongoose');
const serial = require("generate-serial-key")

const userAccountModel = require('../model/user-account-registration.model');
const emailController = require('./../controller/email.controller');
const emailModelSchema = require('./../model/email.model');

exports.createAccount = ((request, response) => {
    serial.generate()
    const accountModel = new userAccountModel(request.body);
    accountModel.id = new mongoose.Types.ObjectId;
    accountModel.activationKey = serial.generate(20, "_", 5);
    // Set expiration time is 24 hours.
    accountModel.activationExpires = Date.now() + 24 * 3600 * 1000;
    accountModel.save((error, account) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        if (accountModel.email) {
            this.sendEmail(request, response, accountModel);
        }

        return response.json({ status: true, data: account });
    });
});

exports.sendEmail = ((request, response, accountModel) => {
    const emailModel = new emailModelSchema();
    emailModel.to = accountModel.email;
    emailModel.bcc = 'foodschedule126@gmail.com';
    emailModel.subject = "Welcome";
    emailModel.body = ` Dear ${accountModel.firstName} ${accountModel.lastName}, <br/>
                        Thanks for creating a new account. <br/>
                        Please use this activation key: <b>${accountModel.activationKey}</b> to activate your account.
                        <br/>
                        <br/>
                        <br/> 
                        Thanks & Regards,
                        <br/> 
                        FoodSchedular
`
    request.body = emailModel;

    return emailController.sendEmail(request, response);
})