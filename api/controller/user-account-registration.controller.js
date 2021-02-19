const { request } = require('express');
const mongoose = require('mongoose');
const accountSchema = require('../model/user-account-registration.mode');

exports.createAccount = ((request, response) => {

    const accountModel = new accountSchema(request.body);
    accountModel.id = new mongoose.Types.ObjectId;

    accountModel.save((error, account) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: account });
    });
});