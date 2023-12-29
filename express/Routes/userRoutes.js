const express=require("express")

const userRouter=express.Router()



userRouter.get("/:id",(req,res)=>{
    
    const id=req.params.id
    console.log("params", id)
    res.send("user page")
})


 


module.exports=userRouter