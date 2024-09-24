const express = require("express")

const app = express()


app.use((req,res)=>{
   res.send('hello mahadev')
})

app.listen(7777,()=>{
    console.log("server is running at port 7777")
})