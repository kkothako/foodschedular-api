const mongoose = require('mongoose');
const userProfileSchema = require('./../model/user-profile.model');

exports.createUserProfile = ((request, response) => {
    const userProfile = new userProfileSchema(request.body);
    userProfile.id = new mongoose.Types.ObjectId;

    userProfile.save((error, profile) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: profile });
    });
});

exports.getProfileByUserId = ((request, response) => {

    const filter = { userId: ObjectId(request.params.userId) };
    userProfileSchema.findOne(filter, (error, profile) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: profile });
    })
});