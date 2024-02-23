require("dotenv").config();
const express = require('express')

const data = require('./data2')
const mqtt1 = require('./models/mqtt')
const r1 = require('./routes/data')

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({ origin: '*' }));
// parse application/json
app.use(express.json());


app.use("/api/data", r1)
app.use('/', (req, res) => {
  res.send('Hello World!');
});
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} yes app is running`);
        });

    } catch (error) {
        console.log(error);
    }
}
start();

module.exports = app;
