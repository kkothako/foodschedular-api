const mongoose  = require('mongoose');
const {Schema} = mongoose;

const trackOrderModel = new Schema({
    id:String,
    orderId: String,
    profileId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Profile' },
    userId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Registration' },
    isCancelled: Boolean,
    statusId: { type: mongoose.Types.ObjectId, ref: 'Track_Order_Status' },
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Track_Order', trackOrderModel);