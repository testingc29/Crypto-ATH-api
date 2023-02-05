const mongoose = require("mongoose")

mongoose.set('strictQuery', false);

const coinSchema = new mongoose.Schema({
    coin_name: {
        type: String,
        required: [true, "Must provide a coin name"],
        trim: true,
    },
    ath_price: {
        type: Number,
        required: [true, "Must provide an all time high price"]
    },
})

module.exports = mongoose.model("Coin", coinSchema)