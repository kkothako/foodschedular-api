const mongoose = require('mongoose');
const preferencesModel = require('../model/user-preferences.model');

exports.createPrefereces = ((request, response) => {

    const locPreferecesModel = new preferencesModel(request.body);
    locPreferecesModel.id = new mongoose.Types.ObjectId;

    locPreferecesModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    })
})

exports.getPreferencesByUserId = ((request, response) => {

    const filter = { userId: new mongoose.Types.ObjectId(request.params.userId) };
    preferencesModel.find(filter, (error, preferences) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: preferences });
    })
});