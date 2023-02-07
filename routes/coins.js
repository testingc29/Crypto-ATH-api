const express = require("express")
const router = express.Router()

const { getAllCoins, createCoin, getSingleCoin, updateCoin, deleteCoin } = require("../controller/coins")

router.route("/").get(getAllCoins).post(createCoin)
router.route("/:coinName").get(getSingleCoin).patch(updateCoin).delete(deleteCoin)

module.exports = router