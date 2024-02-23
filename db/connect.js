const mongoose = require('mongoose');

uri = "mongodb+srv://fyp59707276:059070072076@cluster0.km6zrvy.mongodb.net/fypretryWrites=true&w=majority&appName=Cluster0"

const connect = () => {
    console.log("db connect yehhh");

    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
// mongoose.connection.on('connected', () => {
//     console.log('success connected');
// })
// mongoose.connection.on('error', (err) => {
//     console.log('errr connected ', err);
// })

module.exports = connect;