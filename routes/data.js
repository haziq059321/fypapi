const express = require('express')
const router = express.Router();

const dataapi = require('../controllers/HydroData')
router.get('/getData', dataapi);

module.exports = router;
