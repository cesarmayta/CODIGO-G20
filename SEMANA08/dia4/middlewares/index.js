const express = require('express')

const app = express()

/********* MIDDLEWARES ****************/
//DE APLICACION
app.use(function(req,res,next){
    console.log("eso es un middleware")
    console.log("request type:",req.method)
    next()
})

app.use((req,res,next)=>{
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    console.log('ejecutado a las',today.toISOString())
    next()
})

//middlewares de ruta
app.use('/usuario',(req,res,next)=>{
    console.log('Request url : ',req.originalUrl)
    next()
})
/**************************************/


app.get('/',(req,res)=>{
    res.json({
        status:true,
        content:'ejemplos de middlewares'
    })
})

app.get('/usuario',(req,res)=>{
    console.log(a + 3)
    res.json({
        nombre:'admin',
        email:'admin@gmail.com'
    })
})

//middlewares para manejo de errores
app.use(function(err,req,res,next){
    console.error(err.stack)
    res.status(500).json({
        status:false,
        content:'ocurrio un error inesperado'
    })
})

app.listen(5000,()=>console.log('http://localhost:5000'))