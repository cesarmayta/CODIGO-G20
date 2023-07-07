const express = require('express')
const {config} = require('./config')
const morgan = require('morgan')
const boom = require('@hapi/boom')

const categoriaApi = require('./routes/categoria.routes')

//middlewares
const {errorHandler,boomErrorHandler} = require('./middlewares/error.handler')

const app = express()
app.use(morgan('combined'))

app.use(express.json())

app.get('/',(req,res)=>{
    try{
        console.log(a + 3)
        res.json({
            'status':true,
            'content':'servidor activo'
        })
    }catch(err){
        res.status(500).json(boom.badData('error : ' + err))
    }
    
})

categoriaApi(app)

//error handlers
app.use(boomErrorHandler)
app.use(errorHandler)



app.listen(config.port,()=>console.log('http://localhost:'+config.port))