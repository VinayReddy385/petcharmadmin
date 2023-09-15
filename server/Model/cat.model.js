const mongoose=require('mongoose')
const CatSchema=mongoose.Schema({
      Name:String,
      Age:Number,
      Price:Number,
      Discirpt:String,
      Catimg:String
})
const CatModel=mongoose.model("cat-Details",CatSchema)
module.exports=CatModel