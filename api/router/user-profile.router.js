const { request } = require("express");

const express= require('express');
const router = express.Router();

const userProfileController = require('./../controller/user-profile.controller');
router
.post('/userprofiles', userProfileController.createUserProfile)
.get('/userprofiles/:userId', userProfileController.getProfileByUserId)
.post('/userprofiles/deleteProfileById', userProfileController.deleteProfileById);

module.exports = router;