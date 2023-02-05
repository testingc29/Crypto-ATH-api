const Coin = require("../models/Coin")

const getAllCoins = async (req, res) => {
    const coins = await Coin.find({})
    res.status(200).json({ coins })
}

const createCoin = async (req, res) => {
    const coin = await Coin.create(req.body)
    res.status(200).json({ msg: "New coin data inserted", coin })
}

const updateCoin = async (req, res) => {
    const { id: coinID } = req.params
    const coin = await Coin.findByIdAndUpdate({ _id: coinID }, req.body, { new: true, runValidators: true })
    if (!coin) {
        return res.status(404).json({ msg: `No coin with ID ${coinID} found` })
    }
    res.status(200).json({ msg: "Coin data updated", coin })
}

const deleteCoin = async (req, res) => {
    const { id: coinID } = req.params
    const coin = await Coin.findByIdAndDelete({ _id: coinID })
    if (!coin) {
        return res.status(404).json({ msg: `No coin with ID ${coinID} found` })
    }
    res.status(200).json({ msg: "Successfully deleted coin", coin })
}

module.exports = {
    getAllCoins,
    createCoin,
    updateCoin,
    deleteCoin,
}