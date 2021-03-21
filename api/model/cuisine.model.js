const mongoose  = require('mongoose');
const {Schema} = mongoose;

const cuisineModel = new Schema({
    cuisineID:String,
    cuisineName:String,
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Cuisine', cuisineModel);