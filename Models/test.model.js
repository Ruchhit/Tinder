import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    password : String,
    email : String
},{
    timestamps : true
})

const User = mongoose.model('User',userSchema)
export default User