const express = require('express')
const {config} = require('./config')

const categoriaApi = require('./routes/categoria.routes')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        'status':true,
        'content':'servidor activo'
    })
})

categoriaApi(app)

app.listen(config.port,()=>console.log('http://localhost:'+config.port))