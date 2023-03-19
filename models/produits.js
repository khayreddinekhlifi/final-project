const mongoose= require('mongoose')
const schema = mongoose.Schema
const produitschema = new schema({
    name:{
        type:String,
        required:true
    },
    cathegorie:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
})
const product=mongoose.model('products',produitschema)

module.exports=product