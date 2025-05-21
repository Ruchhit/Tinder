import express from 'express'
import dotenv from 'dotenv'
import dbConnection from './utils/db.js';
import User from './Models/test.model.js';

dotenv.config()

const app = express();

app.get("/",(req,res)=>{
    console.log("test route");
    res.send("testing")
})

// query parameter
app.get("/user",(req,res)=>{
    console.log(req.query);
})

// dynamivc routing
app.get("/userd/:userId/:password",(req,res)=>{
    console.log(req.params);
})


app.post("/testRegister",async (req,res)=>{
 try {
    const user = new User({
        name : "test",
        age : 22,
        password : "test123",
        email : "test@gmail.com"
    })
  await user.save()
  res.status(200).json({
    message : "user registered",
    user : user
})
 } catch (error) {
    res.status(500).json({
        message : "something went wrong while registering user",
        error : error
    })
 }
})

dbConnection()

app.listen(8080,()=>{
    console.log(`server is running on =`,8080);
})