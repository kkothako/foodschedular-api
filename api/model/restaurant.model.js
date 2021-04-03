const mongoose  = require('mongoose');
const {Schema} = mongoose;

const restaurantModel = new Schema({
    restaurantId:String,
    restaurantName:String,
    cuisineId: String,
    address: {
        addressLine1: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    deliveryArea: String,
    customerRatings: Number,
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Restaurant_Master', restaurantModel);