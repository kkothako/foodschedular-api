const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileModel = new Schema({
    id: mongoose.Types.ObjectId,
    nickName: String,
    firstName: String,
    lastName: String,
    email: String,
    mobile: String,
    address: {
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    isActive: { type: Boolean, default: false },
    cratedAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String,
    userId: String

});

module.exports = mongoose.model('User_Account_Profile', profileModel);