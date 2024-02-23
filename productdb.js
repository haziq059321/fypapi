require("dotenv").config();
const condb = require("./db/connect")
const prod = require("./models/mqtt")


const start = async () => {
    try {
        await connect(process.env.MONGOODB_URL)

    } catch (error) {
        console.log(error);
    }
}

start();
