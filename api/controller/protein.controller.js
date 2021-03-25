const mongoose = require('mongoose');
const proteinModel = require('../model/protein.model');

exports.createProteins = ((request, response) => {

    const locProteinModel = new proteinModel(request.body);
    locProteinModel.proteinID = new mongoose.Types.ObjectId;

    locProteinModel.save((error, result) => {
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: result });
    });
});

exports.getAllProteins = ((request, response)=>{
    proteinModel.find({}, (error, proteins)=>{
        if (error) {
            return response.json({ status: false, error: error });
        }
        return response.json({ status: true, data: proteins });
    });
});