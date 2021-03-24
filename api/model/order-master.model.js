const mongoose  = require('mongoose');
const {Schema} = mongoose;

const orderMasterModel = new Schema({
    id:String,
    cuisineID:String,
    cuisineName:String,
    proteinID:String,
    proteinName: String,
    scheduledDate: String,
    profileId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Profile' },
    userId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Registration' },
    isCancelled: String,
    cancelledDeadlineDate: Date,
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String
});


module.exports = mongoose.model('Order_Master', orderMasterModel);