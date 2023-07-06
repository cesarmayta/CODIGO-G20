const express = require('express')
const {config} = require('./config')

const app = express()

app.get('/',(req,res)=>{
    res.json({
        'status':true,
        'content':'servidor activo'
    })
})

app.listen(config.port,()=>console.log('http://localhost:'+config.port))