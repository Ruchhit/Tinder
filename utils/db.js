import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// function to conncet to DB
const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("mongo bdb connected success!!")
    }).catch((err) => {
        console.log("not connected!!", err);
    });
    
}
export default dbConnection;
