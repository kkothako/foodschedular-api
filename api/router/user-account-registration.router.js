const express = require('express');
const router = express.Router();

const accountRegistratonModel = require('../controller/user-account-registration.controller');

router
    .post('/useraccounts', accountRegistratonModel.createAccount);

module.exports = router;