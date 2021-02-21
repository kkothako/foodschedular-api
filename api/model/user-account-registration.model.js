const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountModel = new Schema({
    id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    passowrd: String,
    mobile: String,
    role:String,
    address: {
        addressLine1: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    isActive: { type: Boolean, default: true },
    createAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User_Account_Registration', accountModel)
