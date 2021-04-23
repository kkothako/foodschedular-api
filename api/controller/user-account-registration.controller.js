const mongoose = require('mongoose');
const serial = require("generate-serial-key")
var otpGenerator = require('otp-generator');

const userAccountModel = require('../model/user-account-registration.model');
const emailController = require('./../controller/email.controller');
const emailModelSchema = require('./../model/email.model');

exports.createAccount = ((request, response) => {
    //serial.generate()
    const otp = otpGenerator.generate(6, {
        upperCase: false,
        specialChars: false, digits: true, alphabets: false
    });

    const accountModel = new userAccountModel(request.body);
    accountModel.id = new mongoose.Types.ObjectId;
    accountModel.activationKey = otp;//serial.generate(20, "_", 5);
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

exports.validateActivationKey = ((request, response) => {
    userAccountModel.findOneAndUpdate({ activationKey: request.body.activationKey, id: request.body.userId },
        { isActive: true }, (error, account) => {
            if (error) {
                return response.json({ status: false, error: error })
            }
            if (!account) {
                return response.json({ status: false });
            }
            return response.json({ status: true });
        })
});

exports.validateLogin = ((request, response) => {

    const filter = { email: request.body.email, password: request.body.password, isActive: true };

    userAccountModel.findOne(filter, { password: 0 },
        (error, account) => {
            console.log(error)
            if (error || !account) {
                const errorDetails = `Opps! something went wrong. Please try again with valid credentials`
                return response.json({ status: false, error: account ? error : errorDetails });
            }
            return response.json({ status: true, data: account });
        });

});

exports.sendEmail = ((request, response, accountModel) => {
    const emailModel = new emailModelSchema();
    emailModel.to = accountModel.email;
    emailModel.bcc = 'foodschedule126@gmail.com';
    emailModel.subject = "Welcome";
    emailModel.body = ` Dear ${accountModel.role} , <br/>
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