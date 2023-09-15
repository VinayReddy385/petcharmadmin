const mongoose=require('mongoose')
const BirdSchema=mongoose.Schema({
      Name:String,
      Age:Number,
      Price:Number,
      Discirpt:String,
      Birdimg:String
})
const BirdModel=mongoose.model('bird-Details',BirdSchema)
module.exports=BirdModel