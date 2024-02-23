const mongoose = require('mongoose')
const datta = require('../models/mqtt')

const dataapi = async (req, res) => {
    const myData = await datta.find();
    res.status(200).json(myData);
};

<<<<<<< HEAD

module.exports = { dataapi };
=======
module.exports =dataapi;
>>>>>>> da96f57b8d46e3a26242e4249a716c57de617bba

