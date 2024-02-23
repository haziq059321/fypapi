const express = require('express')
const cors = require('cors');
const data = require('./data2')
const mqtt1 = require('./models/mqtt')
const r1 = require('./routes/data')

const app = express();
app.use(cors({ origin: '*' }));
// parse application/json
app.use(express.json());


app.use("/api/data", r1)
app.use('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(8080, () => {
    console.log(`yes app is running`);
});

module.exports = app;
