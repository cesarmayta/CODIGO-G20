const express = require('express')
const mysqlConnection = require('./database')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        'status':true,
        'content':'api rest activo'
    })
})

app.get('/tarea',(req,res)=>{
    mysqlConnection.query("select * from tarea",
    (err,rows,fields)=>{
        if(!err){
            context = {
                'status':true,
                'content':rows
            }
            res.json(context)
        }else{
            console.log(err)
        }
    })
})

app.post('/tarea',(req,res)=>{
    const {descripcion,estado} = req.body

    const query = `insert into tarea(descripcion,estado)
                   values('${descripcion}','${estado}')`

    mysqlConnection.query(query,(err,rows,fields)=>{
        if(!err){
            res.json({
                'status':true,
                'content':'registro exitoso'
            })
        }else{
            console.log(err)
        }
    })
})

app.get('/tarea/:id',(req,res)=>{
    const {id} = req.params
    const query = `select * from tarea where id=?`

    mysqlConnection.query(query,[id],(err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }
        else{
            console.log(err)
        }
    })
})

app.put('/tarea/:id',(req,res)=>{
    const {id} = req.params
    const {descripcion,estado} = req.body

    const query = `update tarea set
                   descripcion=?,estado=?
                   where id=?`

    mysqlConnection.query(query,[descripcion,estado,id],
        (err,rows,fields)=>{
            if(!err){
                res.json({
                    'status':true,
                    'content':'registro actualizado con exito'
                })
            }
            else{
                console.log(err)
            }
        })
})

app.delete('/tarea/:id',(req,res)=>{
    const {id} = req.params

    const query = `delete from tarea where id=?`

    mysqlConnection.query(query,[id],
        (err,rows,fields)=>{
            if(!err){
                res.json({
                    'status':true,
                    'content':'registro eliminado con exito'
                })
            }
            else{
                console.log(err)
            }
        })
})

app.listen(5000,()=>console.log('http://localhost:5000'))