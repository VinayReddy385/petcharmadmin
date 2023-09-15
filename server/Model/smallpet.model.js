const mongoose=require('mongoose')
const SmallpetSchema=mongoose.Schema({
      Name:String,
      Age:Number,
      Price:Number,
      Discirpt:String,
      Smallpetimg:String
})
const SmallpetModel=mongoose.model("Smallpets-Details",SmallpetSchema)
module.exports=SmallpetModel