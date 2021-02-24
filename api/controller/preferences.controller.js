const mongoose = require('mongoose');
const preferencesModel = require('../model/preferences.model');

exports.createPrefereces = ((request, response) => {

    const locPreferecesModel = new preferencesModel(request.body);
    locPreferecesModel.id = new mongoose.Types.ObjectId;

    locPreferecesModel.save((error, prefereces) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: prefereces });
    })
})
