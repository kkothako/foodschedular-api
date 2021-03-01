const mongoose = require('mongoose');
const profileModel = require('../model/profile.model');

exports.createProfile = ((request, response) => {
    const locProfileModel = new profileModel(request.body);
    locProfileModel.id = new mongoose.Types.ObjectId;

    locProfileModel.save((error, success) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: success });
    });
});
