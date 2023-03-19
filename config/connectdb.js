const mongoose=require('mongoose')

const connectdb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://khayreddine:user2424@cluster0.zg9afen.mongodb.net/?retryWrites=true&w=majority')
        console.log("data base  is connected") 
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectdb