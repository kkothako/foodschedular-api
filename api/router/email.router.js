const { request } = require("express");

const express = require('express');
const router = express.Router();

const emailController = require('../controller/email.controller');

router
.post('/email', emailController.sendEmail);

module.exports = router;
