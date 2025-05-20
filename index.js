import express from 'express'

const app = express()

app.get("/",(req,res)=>{
    console.log("test route");
    res.send("testing")
})

app.listen(8080,()=>{
    console.log(`server is running on =`,8080);
})