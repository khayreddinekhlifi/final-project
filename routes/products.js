const express=require('express')
const product=require('../models/produits')
const productRouter=express.Router()

//add a new product

productRouter.post('/add',async(req,res)=>{
    try {
       const newproduct= new product(res.body)
       const result= await newproduct.save()
       res.send({product:result,msg:"new product is added"})
    } catch (error) {
        console.log(error)
    }
})
// find product with  id


productRouter.get('/:id',async(req,res)=>{
    try {
       const result= await newproduct.findByid({_id:req.params.id})
       res.send({product:result,msg:" product  by id finded"})
    } catch (error) {
        console.log(error)
    }
})

// get all the product 

productRouter.get('/all',async(req,res)=>{
    try {
       const result= await newproduct.find()
       res.send({product:result,msg:"  all product "})
    } catch (error) {
        console.log(error)
    }
})

// delete by id 

productRouter.delete('/:id',async(req,res)=>{
    try {
       const result= await newproduct.findByidAndDelete({_id:req.params.id})
       res.send({msg:" product  is deleted"})
    } catch (error) {
        console.log(error)
    }
})

// update by id 

productRouter.put('/:id',async(req,res)=>{
    try {
       const result= await newproduct.findByidAndUpdate({_id:req.params.id})
       res.send({product:result,msg:" product is updated"})
    } catch (error) {
        console.log(error)
    }
})