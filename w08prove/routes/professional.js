const express = require('express');

const router = express.Router();

const professionalController = require('../controllers/professional');

router.get('/professional', professionalController.getProfessional);

module.exports = router; 