const express = require("express")
const router = express.Router()

const { getAllCoins, createCoin, getSingleCoin, deleteCoin } = require("../controller/coins")

router.route("/").get(getAllCoins).post(createCoin)
router.route("/:coinName").get(getSingleCoin).delete(deleteCoin)

module.exports = router