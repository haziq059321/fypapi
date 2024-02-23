const express = require('express')
const cors = require('cors');
const r1 = require('./routes/data')
<<<<<<< HEAD
const mongoose = require('mongoose')
=======
const mongoose = require('mongoose');
>>>>>>> da96f57b8d46e3a26242e4249a716c57de617bba

require('dotenv').config();

const app = express();
app.use(cors({ origin: '*' }));
// parse application/json
app.use(express.json());


<<<<<<< HEAD




app.use("/api/data", r1)

app.use("/", (req, res) => {
    res.send("hello world");
})


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
=======
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
>>>>>>> da96f57b8d46e3a26242e4249a716c57de617bba

module.exports = app;
