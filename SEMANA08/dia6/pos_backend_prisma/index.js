const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'servidor con prisma activo'
    })
})

app.listen(5000,()=>console.log("http://localhost:5000"))