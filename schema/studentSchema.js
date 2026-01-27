
import mongoose from 'mongoose'//import mongoose package

const studentSchema=mongoose.Schema({ //create schema
    name:String,
    age:Number,
    email:String,
    city:String
})

export default studentSchema //export schema module
