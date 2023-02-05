require('dotenv').config()

const connectDB = require("./db/connect")
const Coin = require("./models/Coin")

const jsonData = require("./jsonData.json")

const start = async () => {
    try {
        console.log("Connecting to DB...")
        await connectDB(process.env.MONGO_URI)
        console.log("Connection Success!")
        console.log("Emptying DB...")
        await Coin.deleteMany({})
        console.log("Success!")
        console.log("Inserting new data...")
        await Coin.create(jsonData)
        console.log("Data inserted...")
        process.exit(0)
    } catch (error) {
        console.log(error);
    }
}

start()