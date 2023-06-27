const mongoose=require('mongoose')

const foodSchena=new mongoose.Schema({
   "CategoryName":{type:String},
    "name":{type:String},
    "img":{type:String},
    "option":[{
         "half":{type:String},
          "full":{type:String}
    }],
   "description":{type:String}

})


module.exports=mongoose.model('food_item',foodSchena)