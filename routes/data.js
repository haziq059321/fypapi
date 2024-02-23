const express = require('express')
const router = express.Router();

const { dataapi, dataapitesting } = require('../controllers/HydroData')
router.route("/").get(dataapi);
router.route("/testing").get(dataapitesting);

module.exports = router;
