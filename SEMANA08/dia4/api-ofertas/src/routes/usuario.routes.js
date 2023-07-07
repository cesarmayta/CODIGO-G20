const express = require('express')
const UsuarioService = require('../services/usuario.service')

const boom = require('@hapi/boom')

function usuarioApi(app){
    const router = express.Router()
    app.use('/usuario',router)

    const objUsuario = new UsuarioService()

    router.post('/',async function (req,res){
        const {body: usuario} = req
        try{
            const data = await objUsuario.create({usuario})
            res.status(201).json({
                status:true,
                content:data
            })
        }catch(err){
            res.status(500).json(boom.badData(err))
        }
    })
}

module.exports = usuarioApi