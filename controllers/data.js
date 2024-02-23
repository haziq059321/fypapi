const mongoose = require('mongoose')
const datta = require('../models/mqtt')

const dataapi = async (req, res) => {
    const myData = await datta.find({});
    res.status(200).json({ myData });
};
const dataapitesting = async (req, res) => {
    res.status(200).json({ msg: "this is our Hydroponics Data" });
};

module.exports = { dataapi, dataapitesting };

