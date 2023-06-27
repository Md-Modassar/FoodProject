const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const mongoDB = require('./db')



app.get("/", (req, res) => {
    res.send("helo backend")
})
app.use(cors())
app.use(express.json())
app.use('/api', require('./Routes/CreateUser'))
app.use('/api', require('./Routes/Createfood'))
app.use('/api', require("./Routes/Order_Data"))


mongoDB()





app.listen(3001, () => {
    console.log("server is running 3001")
})
