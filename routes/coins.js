const express = require("express")
const router = express.Router()

const { getAllCoins, createCoin, updateCoin, deleteCoin } = require("../controller/coins")

router.route("/").get(getAllCoins).post(createCoin)
router.route("/:id").patch(updateCoin).delete(deleteCoin)

module.exports = router