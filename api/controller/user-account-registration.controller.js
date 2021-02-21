const mongoose = require('mongoose');
const userAccountModel = require('../model/user-account-registration.model');

exports.createAccount = ((request, response) => {

    const accountModel = new userAccountModel(request.body);
    accountModel.id = new mongoose.Types.ObjectId;

    accountModel.save((error, account) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: account });
    });
});