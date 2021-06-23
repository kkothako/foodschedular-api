const mongoose = require('mongoose');
const { schema } = require('./restaurant.model');
const { Schema } = mongoose;

const restaurantMenuModel = new Schema({
    menuName: String,
    restaurantId: String,
    proteinId: String,
    specialInstructions: String,
    allergy: String,
    ingredients: String,
    price: { type: Number },
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String,
    restaurantTimings: { type: Schema.Types.ObjectId, ref: 'RestaurantTimings' },
});

module.exports = mongoose.model('RestaurantMenu', restaurantMenuModel);