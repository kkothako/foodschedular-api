const mongoose  = require('mongoose');
const {Schema} = mongoose;

const restaurantTimingsModel = new Schema({
    ID:String,
    RestaurantID:String,
    DayoftheWeek: String,
    OpenTime: {type: Date},
    CloseTime: {type: Date},
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Restaurant_Timings', restaurantTimingsModel);