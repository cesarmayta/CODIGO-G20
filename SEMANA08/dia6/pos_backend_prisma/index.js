const express = require('express')
const app = express()

const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'servidor con prisma activo'
    })
})

app.get('/categoria',async(req,res)=>{
    const data = await prisma.tbl_categoria.findMany()
    res.json({
        status:true,
        content:data
    })
})

app.listen(5000,()=>console.log("http://localhost:5000"))