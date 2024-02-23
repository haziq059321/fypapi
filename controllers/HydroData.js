const mongoose = require('mongoose')
const datta = require('../models/mqtt')

const dataapi = async (req, res) => {
    res.status(200).json(datta);
};

module.exports =dataapi;

