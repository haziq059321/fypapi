const mongoose = require('mongoose')
const datta = require('../models/mqtt')

const dataapi = async (req, res) => {
    var mysort = { _id: -1 };
    const myData = await datta.find().sort(mysort);
    res.status(200).json(myData);
};

module.exports = dataapi;


