const Connection = require("./config/Connection")
const express = require("express")
const router = require("./routes/routes")
require("dotenv").config()
const app = express()
app.use(express.json())
Connection()
app.use(router)

app.use("/",(req, res)=>{
    res.json("server is alive");
    
})
const port = 7002
app.listen(port ,()=>{
console.log("Server is running in this port ",port)
})