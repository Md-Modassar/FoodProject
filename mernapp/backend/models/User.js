const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
   name:{type:String,required:true},
   location:{type:String,required:true},
   email:{type:String,required:true,uniqe:true},
   password:{type:String,required:true},
   data:{type:Date,default:Date.now}

})

module.exports=mongoose.model("user",UserSchema)