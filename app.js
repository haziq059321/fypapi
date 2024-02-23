require("dotenv").config();
const express = require('express')
const app = express();
const data = require('./data2')
const mqtt1 = require('./models/mqtt')
const r1 = require('./routes/data')

//const connectdb = require('./db/connect')

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("hey");
})
app.use("/api/data", r1)
const start = async () => {
    try {
        //await dbconnect();
        app.listen(PORT, () => {
            console.log(`${PORT} yes app is running`);
        });

    } catch (error) {
        console.log(error);
    }
}
start();

module.exports = app;