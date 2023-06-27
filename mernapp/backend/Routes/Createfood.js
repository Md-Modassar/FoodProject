const express = require('express')
const router = express.Router()

router.post('/foodData', (req, res) => {
    try {

        res.send([global.food_items, global.catogries])
    } catch (err) {
        res.send("server Error")
    }
})

module.exports = router



