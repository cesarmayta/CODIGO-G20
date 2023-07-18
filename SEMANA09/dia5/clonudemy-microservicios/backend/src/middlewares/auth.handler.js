const jwt = require('jsonwebtoken')
const {config} = require('../config')

function verifyToken(req,res,next){
    const bearerToken = req.headers['authorization']

    if(typeof bearerToken !== 'undefined'){
        const bearer = bearerToken.split(' ')
        const token = bearer[1]
        console.log('token : ',token)
        try{
            const decoded = jwt.verify(token,config.jwt_secret)
            console.log(decoded)
        }catch(err){
            return res.status(401).json({
                message:err
            })
        }
        return next()
    }else{
        res.status(403).json({
            message:'token is undefined'
        })
    }
}

module.exports = {verifyToken}