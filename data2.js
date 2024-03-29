
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com:1883')

const connect = require('./db/connect')
// const appp = require('./app')
const topic = "HydroData";
const topic2 = "HydroData2"

const Event = require('./models/mqtt')
const shortId = require('shortid');
const mongoose = require('mongoose');
const moment = require('moment');



client.on('connect', async () => {
    console.log('connected to mqtt');
    client.subscribe(topic);

    await mongoose.connect(process.env.MONGOODB_URL);

})
client.on('connect', async () => {
    console.log('connected to mqtt');
    client.subscribe(topic2);

    await mongoose.connect(process.env.MONGOODB_URL);

})
mongoose.connection.on('connected', () => {
    console.log('success connected');
})
mongoose.connection.on('error', (err) => {
    console.log('errr connected ', err);
})


//axios.post('mongodb+srv://fyp59707276:059070072076@cluster0.km6zrvy.mongodb.net/fyp').then((res) => { console.log(res) }).catch((err) => { console.log(err); })

client.on('message', async (topic, message) => {
    console.log(`topic is  ${topic.toString()} and message is ${message.toString()}`)
    // let data = message;
    let data = message.toString();
    data = JSON.parse(data);
    data._id = shortId.generate();
    data.created = moment().utc().add(5, 'hours');

    // Save live data into database
    await saveData(data);
})
client.on('message', async (topic2, message) => {
    console.log(`topic is  ${topic2.toString()} and message is ${message.toString()}`)
    // let data = message;
    let data = message.toString();
    data = JSON.parse(data);
    data._id = shortId.generate();
    data.created = moment().utc().add(5, 'hours');

    // Save live data into database
    await saveData(data);
})

saveData = async (data) => {
    data = new Event(data);  // Event table in db
    data = await data.save(); // async save 
    console.log('Saved data:', data); // console

}
module.exports = data2;