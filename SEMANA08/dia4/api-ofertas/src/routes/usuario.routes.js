const express = require('express')
const UsuarioService = require('../services/usuario.service')
const jwt = require('jsonwebtoken')
const {config} = require('../config')

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

    router.post('/login',async function (req,res){
        const {body: usuario} = req

        const authUsuario = await objUsuario.authenticate({usuario})
        if(authUsuario.id > 0){
            const token = jwt.sign(
                authUsuario,
                config.jwt_secret,
                {
                    expiresIn:'1h'
                }
            )
            res.status(200).json({
                status:true,
                content:token
            })
        }else{
            res.status(401).json({
                status:false,
                content:'datos invalidos'
            })
        }
    })
}

module.exports = usuarioApi