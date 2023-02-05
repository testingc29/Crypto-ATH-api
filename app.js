require('dotenv').config()
require('express-async-errors');

const express = require("express")
const cors = require('cors')
const app = express()

const coinsRouter = require("./routes/coins.js")
const connectDB = require("./db/connect")

const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// MIDDLEWARE

app.use(cors())
app.use(express.json())

// ROUTE
app.use("/coin-data", coinsRouter)

const PORT = process.env.PORT || 3000

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Server is up and running on PORT ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()