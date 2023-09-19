const cors = require("cors")
const express = require("express") 

const app = express()
app.use(express.json())
app.use(cors)

app.get("/",(req,res)=>{
    res.status(200).send("welcome page")
})
app.get("/signup",(req,res)=>{
    res.status(200).send("Signup Page")
})
app.post("/",(req,res)=>{
    res.send(req.body)
})
app.post("/signup",(req,res)=>{
    res.send(req.body)
})
app.post("/login",(req,res)=>{
    res.send(req.body)
})
app.listen(8090,()=>{
    console.log("running")
})