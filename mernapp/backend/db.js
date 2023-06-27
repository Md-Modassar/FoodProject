const mongoose = require('mongoose')
const mongodb = require('mongodb')
const foodmodel = require('./models/Food')
const catorymodel = require('./models/Category')

const mongoDB = async () => {
    await mongoose.connect("mongodb+srv://modassar123:modassar1234@test.ahxnnau.mongodb.net/gofoodmern", {
        useNewUrlParser: true
    }).then(async () => {
        console.log("mongoDB is connected")
        const data = await foodmodel.find()
        const data1 = await catorymodel.find()
        global.food_items = data
        global.catogries = data1

    })
        .catch((err) => {
            console.log(err)
        })
}


module.exports = mongoDB