const mongoose=require('mongoose')
const DogSchema=mongoose.Schema({
      Name:String,
      Age:Number,
      Price:Number,
      Discirpt:String,
      Dogimg:String
})
const DogModel=mongoose.model("dog-Details",DogSchema)
module.exports=DogModel