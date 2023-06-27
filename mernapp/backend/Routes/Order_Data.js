const express = require('express')
const router = express.Router();
const orderModel = require('../models/Orders')

router.post('/order', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0, 0, { Order_date: req.body.order_date })



    let eId = await orderModel.findOne({ 'email': req.body.email })
    console.log(eId)
    if (eId === null) {
        try {

            await orderModel.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {

            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await orderModel.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {

            res.send("Server Error", error.message)
        }
    }
})

router.post('/myorderdata', async (req, res) => {
    try {
        console.log(req.body.email)
        let eId = await orderModel.findOne({ 'email': req.body.email })

        res.json({ orderData: eId })
    } catch (error) {
        res.send("Error", error.message)
    }


})

module.exports = router;