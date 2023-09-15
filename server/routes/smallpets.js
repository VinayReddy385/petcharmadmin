const express=require('express')
const router=express.Router()
const path = require('path');
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
const SmallpetModel=require('../Model/smallpet.model');

router.post('/',upload.single('file'),(req,res)=>{
      SmallpetModel.create({
            Name:req.body.Name,
            Age:req.body.Age,
            Price:req.body.Price,
            Discirpt:req.body.Discirpt,
            Smallpetimg:req.file.filename
      }).then(response=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })
})
router.get('/',(req,res)=>{
     SmallpetModel.find().then(response=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })
})

router.get('/:id',(req,res)=>{
      const idQuery=req.params.id
      SmallpetModel.findById(idQuery).then((response)=>{
            res.send(response)
      }).catch(err=>{
            res.send(err)
      })
  })


 router.put('/:id',(req,res)=>{
     const idQuery=req.params.id
     SmallpetModel.findByIdAndUpdate(idQuery,{ $set:req.body}).then((response)=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })
 })
 router.delete('/:id',(req,res)=>{
     const idQuery=req.params.id
     SmallpetModel.findByIdAndDelete(idQuery).then(response=>{
           res.send(response)
     }).catch(err=>{
           res.send(err)
     })


 })
 module.exports=router