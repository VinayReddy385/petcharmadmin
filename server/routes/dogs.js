const express=require('express')
const router=express.Router()
const path = require('path');
const DogModel=require('../Model/dog.model')
const multer =require('multer') 
const storage=multer.diskStorage({                            //
      destination:(req,file,cb)=>{
        cb(null,'public/images')
      },
      filename:(req,file,cb)=>{
        cb(null,Date.now()+file.fieldname+path.extname(file.originalname))
      }
    })



const upload=multer({storage})



router.post('/',upload.single('file'),(req,res)=>{
 DogModel.create({
            Name:req.body.Name,
            Age:req.body.Age,
            Price:req.body.Price,
            Discirpt:req.body.Discirpt,
            Dogimg:req.file.filename
      })
     /*   let newdog=new DogModel({
            Name:req.body.Name,
            Age:req.body.Age,
            Price:req.body.Price,
            Discirpt:req.body.Discirpt,
            Dogimg:req.file.filename
     })        */
     .then(response=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })
})
router.get('/',(req,res)=>{
     DogModel.find().then(response=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })
})
router.get('/:id',(req,res)=>{
      const idQuery=req.params.id
      DogModel.findById(idQuery).then((response)=>{
            res.send(response)
      }).catch(err=>{
            res.send(err)
      })
  })
 router.put('/:id',(req,res)=>{
     const idQuery=req.params.id
     DogModel.findByIdAndUpdate(idQuery,{ $set:req.body}).then((response)=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })
 })
 router.delete('/:id',(req,res)=>{
     const idQuery=req.params.id
     DogModel.findByIdAndDelete(idQuery).then(response=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })


 })
 module.exports=router