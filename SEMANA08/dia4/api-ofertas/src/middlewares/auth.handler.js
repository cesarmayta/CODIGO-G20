const jwt = require('jsonwebtoken')
const {config} = require('../config')

function verifyToken(req,res,next){
    const bearerToken = req.headers['authorization']
    console.log(bearerToken)
    if(typeof bearerToken !== 'undefined'){
        return next()
    }
    else{
        res.status(403).json({
            status:false,
            content:'no se econtro token de autenticación'
        })
    }
}

module.exports = {verifyToken}