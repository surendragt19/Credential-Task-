const mongoose =require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/kuchbhi')
.then(()=>{
    console.log("Databse Connect")
})
.catch((e)=>{
    console.log("connection Faield",e)
})

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model('Jwt',newSchema)
