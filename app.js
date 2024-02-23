const express = require('express')
const cors = require('cors');
const r1 = require('./routes/data')
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(cors({ origin: '*' }));
// parse application/json
app.use(express.json());


app.use("/api/data", r1)
app.use('/', (req, res) => {
  res.send('Hello World!');
});

mongoose
  .connect(process.env.MONGOODB_URL)
  .then(() => {
    app.listen(4000, () => {
      console.log('listening on port 4000');
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
