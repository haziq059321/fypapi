const mongoose = require('mongoose')
const datta = require('mqtt')

const dataapi = async (req, res) => {

    res.status(200).json({ msg: "this is our Hydroponics Data" });
};
const dataapitesting = async (req, res) => {
    res.status(200).json({ msg: "this is our Hydroponics Data" });
};

module.exports = { dataapi, dataapitesting };

