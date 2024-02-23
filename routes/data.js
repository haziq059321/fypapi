const express = require('express')
const router = express.Router();

const { dataapi, dataapitesting } = require('../controllers/data')
router.route("/").get(dataapi);
router.route("/testing").get(dataapitesting);

module.exports = router;
