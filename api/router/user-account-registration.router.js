const express = require('express');
const router = express.Router();

const userAccountController = require('../controller/user-account-registration.controller');

router
    .post('/useraccounts', userAccountController.createAccount)
    .post('/useraccounts/validateLogin', userAccountController.validateLogin)
    .get('/useraccounts/:activationKey', userAccountController.validateActivationKey);

module.exports = router;