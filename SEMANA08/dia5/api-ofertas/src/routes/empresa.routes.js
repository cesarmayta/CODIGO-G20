const express = require('express')
const EmpresaService = require('../services/empresa.service')

const boom = require('@hapi/boom')

function empresaApi(app){
    const router = express.Router()
    app.use('/empresa',router)

    const objEmpresa = new EmpresaService()

    router.get('/',async function(req,res){
        try{
            const data = await objEmpresa.getAll()
            res.status(200).json({
                status:true,
                content:data
            })
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })

    router.post('/',async function(req,res){
        try{
            const body = req.body
            const data = await objEmpresa.create(body)
            res.status(201).json({
                status:true,
                content:data
            })
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })

    router.get('/:id',async (req,res)=>{
        try{
            const {id} = req.params
            const data = await objEmpresa.findOne(id)
            res.json({
                status:true,
                content:data
            })
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })

    router.put('/:id',async (req,res)=>{
        try{
            const {id} = req.params
            const body = req.body
            const data = await objEmpresa.update(id,body)
            res.json({
                status:true,
                content:data
            })
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })

    router.delete('/:id',async (req,res)=>{
        try{
            const {id} = req.params

            const data = await objEmpresa.delete(id)
            if(data){
                res.sendStatus(201)
            }else{
                res.sendStatus(401)
            }
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })
}

module.exports = empresaApi