const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderHistoryModel = new Schema({
    orderId: String,
    profileId: String,
    userId: String,
    proteinId: { type: mongoose.Types.ObjectId, ref: 'Protein' },
    cuisineId: { type: mongoose.Types.ObjectId, ref: 'Cuisine' },
    menuId: String,
    restaurentId: String,
    scheduleDate: String,
    price: Number,
    orderStatus: String,
    upDatedBy: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order_History', orderHistoryModel);