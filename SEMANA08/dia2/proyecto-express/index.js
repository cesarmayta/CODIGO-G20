const express = require('express')
const bp = require('body-parser')
const app = express()

app.use(bp.urlencoded({extended:true}))




app.use(express.static('public'))

app.get('/',function(req,res){
    res.send('<h1><center>Mi primer servidor con Express.js</center></h1>')
})

app.get('/saludo',(req,res)=>{
    let nombre = req.query.nom
    res.send('<h1>Hola ' + nombre)
})

app.get('/suma/:n1/:n2',(req,res)=>{
    const {n1,n2} = req.params

    let suma = parseInt(n1) + parseInt(n2)
    res.send('<h1>la suma es ' + suma + '</h1>')
})

app.post('/calculadora',(req,res)=>{
    let operacion = req.query.ope
    resultado = 0
    if(operacion === "suma"){
        n1 = req.body.n1
        n2 = req.body.n2
        resultado = parseInt(n1) + parseInt(n2)
    }
    res.send('resultado es ' +  resultado)
})

app.listen(5000,()=>console.log('servidor en http://localhost:5000'))