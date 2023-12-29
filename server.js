const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
    
   res.setHeader("content-type",'text/html')


    console.log(req.url)
    if(req.url=="/about"){
        
        res.end("about page")
    }
    else if(req.url=="/contact"){

        res.end("contact page")
    }else{
        const data=fs.readFileSync("index.html")
        res.end(data)
    }

})

server.listen(3000,()=>console.log("server ready"))