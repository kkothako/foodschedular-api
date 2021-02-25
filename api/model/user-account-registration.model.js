var uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountModel = new Schema({
    id: mongoose.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: {
        type: String, required: true, unique: true
    
    },
    passowrd: String,
    mobile: String,
    role: String,
    address: {
        addressLine1: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    activationKey:String,
    activationExpires:String,
    isActive: { type: Boolean, default: false },
    createAt: { type: Date, default: Date.now }
});
accountModel.plugin(uniqueValidator);
module.exports = mongoose.model('User_Account_Registration', accountModel)
