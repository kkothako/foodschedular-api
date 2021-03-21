const mongoose = require('mongoose');
const { Schema } = mongoose;

const preferencesModel = new Schema({
    id: mongoose.Types.ObjectId,
    cuisines: [{
        name: String,
        code: String
    }],
    proteins: [{
        name: String,
        code: String
    }],
    allergies: [{
        name: String,
        code: String
    }],
    isActive: { type: Boolean, default: true },
    createAt: { type: Date, default: Date.now },
    createdBy: String,
    modifiedAt: { type: Date, default: Date.now },
    modifiedBy: String,
    profileId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Profile' },
    userId: { type: mongoose.Types.ObjectId, ref: 'User_Account_Registration' },
})

module.exports = mongoose.model('User_Account_Preferences', preferencesModel);