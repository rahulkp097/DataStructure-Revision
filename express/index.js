const express= require("express")
const userRouter = require("./Routes/userRoutes")

const app=express()

app.get("/",(req,res)=>{
    res.send("home page")
})

app.use("/users",userRouter)


app.listen(3000,()=>console.log("server runnning"))