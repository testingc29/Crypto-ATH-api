const Coin = require("../models/Coin")

const getAllCoins = async (req, res) => {
    const coins = await Coin.find({})
    res.status(200).json({ coins })
}

const createCoin = async (req, res) => {
    const coin = await Coin.create(req.body)
    res.status(200).json({ msg: "New coin data inserted", coin })
}

const getSingleCoin = async (req, res) => {
    const { coinName: coinName } = req.params
    const coin = await Coin.findOne({ coin_name: coinName })
    if (!coin) {
        return res.status(404).json({ msg: `No coin with name ${coinName} found` })
    }
    res.status(200).json({ coin })
}

const deleteCoin = async (req, res) => {
    const { coinName: coinName } = req.params
    const coin = await Coin.deleteOne({ coin_name: coinName })
    if (!coin) {
        return res.status(404).json({ msg: `No coin with name ${coinName} found` })
    }
    res.status(200).json({ msg: "Successfully deleted coin", coin })
}

module.exports = {
    getAllCoins,
    createCoin,
    getSingleCoin,
    deleteCoin,
}