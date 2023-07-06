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
}

module.exports = categoriaApi