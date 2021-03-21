const express = require('express');
const router = express.Router();

const proteinController = require('../controller/protein.controller');

router.post('/protein', proteinController.createProteins);
router.post('/protein/getallproteins', proteinController.getAllProteins);

module.exports = router;