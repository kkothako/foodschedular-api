const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderMasterModel = new Schema({
    orderId: { type: mongoose.Types.ObjectId },
    profileId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Profile' },
    userId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Registration' },
    totalAmount: Number,
    paidAmmount: Number,
    tax: Number,
    orderStatus: Boolean,
    upDatedBy: { type: mongoose.Types.ObjectId, ref: 'User_Account_Registration' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Order_Master', orderMasterModel);