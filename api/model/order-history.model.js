const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderHistoryModel = new Schema({
    orderId: String,
    profileId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Profile' },
    userId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Registration' },
    proteinId: { type: mongoose.Types.ObjectId, ref: 'Protein' },
    cuisineId: { type: mongoose.Types.ObjectId, ref: 'Cuisine' },
    menuId: { type: mongoose.Types.ObjectId, ref: 'RestaurantMenu' },
    restaurentId: { type: mongoose.Types.ObjectId, ref: 'Restaurant_Master' },
    scheduleDate: String,
    price: Number,
    orderStatus: String,
    upDatedBy: { type: mongoose.Types.ObjectId, ref: 'User_Account_Registration' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order_History', orderHistoryModel);