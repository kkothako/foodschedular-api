const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantTimingsModel = new Schema({
    restaurantId: String,
    dayOfTheWeek: String,
    openTime: String,
    closeTime: String,
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String,
    restaurentMenu: { type: Schema.Types.ObjectId, ref: 'RestaurantMenu' }
});


module.exports = mongoose.model('RestaurantTimings', restaurantTimingsModel);