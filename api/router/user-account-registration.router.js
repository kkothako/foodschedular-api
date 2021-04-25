const express = require('express');
const router = express.Router();

const userAccountController = require('../controller/user-account-registration.controller');

router
    .post('/useraccounts', userAccountController.createAccount)
    .post('/useraccounts/validateLogin', userAccountController.validateLogin)
    .post('/useraccounts/validateActivationKey', userAccountController.validateActivationKey)
    .post('/useraccounts/resendPassword', userAccountController.sendForgotPasswordByEmailId);
module.exports = router;