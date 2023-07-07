const express = require('express')
const CategoriaService = require('../services/categoria.service')

function categoriaApi(app){
    const router = express.Router()
    app.use('/categoria',router)

    const objCategoria = new CategoriaService()

    router.get('/',async function(req,res){
        try{
            const data = await objCategoria.getAll()
            res.status(200).json({
                status:true,
                content:data
            })
        }catch(err){
            console.log(err)
        }
    })

    router.post('/',async function(req,res){
        const {body:data} = req
        console.log(data)
        try{
            const newData = await objCategoria.create({data})
            console.log(newData)
            res.status(201).json({
                status:true,
                content:newData[0]
            })
        }catch(err){
            console.log(err)
        }
    })

    router.get('/:id',async function(req,res){
        const {id} = req.params
        try{
            const data = await objCategoria.getById(id)
            if(data.length > 0){
                res.status(200).json({
                    status:true,
                    content:data[0]
                })
            }else{
                res.status(404).json({
                    status:false,
                    content:'no se encontraron registros'
                })
            }
        }catch(err){
            console.error(err)
        }
    })

    router.put('/:id',async function(req,res){
        const {id} = req.params
        const {body:data} = req

        try{
            const updData = await objCategoria.update({data,id})
            if(updData.length > 0){
                res.status(200).json({
                    status:true,
                    content:updData[0]
                })
            }else{
                res.status(404).json({
                    status:false,
                    content:'no se encontro el registro'
                })
            }
        }catch(err){
            console.error(err)
        }
    })

    router.delete('/:id',async function(req,res){
        const {id} = req.params

        try{
            const dataDeleted = await objCategoria.delete(id)
            if(dataDeleted){
                res.status(201).json({
                    status:true,
                    content:'registro eliminado'
                })
            }else{
                res.status(404).json({
                    status:false,
                    content:'no hay registros'
                })
            }
        }catch(err){
            console.error(err)
        }
    })

    
}

module.exports = categoriaApi