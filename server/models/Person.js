const mongoose=require('mongoose')

const PersonSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },

    password:{
        type:String,
        required:true,
        min:6
    },


},{timestamps:true})

module.exports=mongoose.model('Person',PersonSchema)