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
}

module.exports = empresaApi