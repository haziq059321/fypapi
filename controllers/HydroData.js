const mongoose = require('mongoose')
const datta = require('../models/mqtt')

const dataapi = async (req, res) => {
    const myData = await datta.findAll();
    res.status(200).json(myData);
};

module.exports =dataapi;

