const mongoose = require('mongoose');
const { Schema } = mongoose;

const preferencesModel = new Schema({
    id: mongoose.Types.ObjectId,
    cuisines: [{
        name: String,
        code: String
    }],
    protiens: [{
        name: String,
        code: String
    }],
    allergies: [{
        name: String,
        code: String
    }],
    isActive: { type: Boolean, default: true },
    createAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('user_Account_Preferences', preferencesModel);