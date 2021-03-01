const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProfileSchema = new Schema({
    id: mongoose.Types.ObjectId,
    userId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Registration' },
    nickName: String,
    firstName: String,
    lastName: String,
    mobile: String,
    address: {
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    }
});

module.exports = mongoose.model('user-profile', userProfileSchema);