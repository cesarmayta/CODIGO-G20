const userController = {}

const bcrypt = require('bcryptjs')
const userModel = require('../models/user.model')

const {config} = require('../config')
const jwt = require('jsonwebtoken')

userController.create = async (req,res) =>{
    try{
        const hash = await bcrypt.hash(req.body.password,10)
        req.body.password = hash
        const newUser = new userModel(req.body)
        await newUser.save()
        res.json({
            'id':newUser._id,
            'email':newUser.email
        })
    }catch(err){
        res.status(502).json({
            message:err
        })
    }
}

userController.auth = async (req,res)=> {
    try{
        dataEmail = req.body.email,
        dataPassword = req.body.password

        const userAuth = await userModel.findOne({email:dataEmail})
        if(await bcrypt.compare(dataPassword,userAuth.password)){
            const token = jwt.sign({
                _id:userAuth._id,
                email:userAuth.email
            },config.jwt_secret,
            { expiresIn : '1h'})

            res.status(200).json({
                'token':token
            })
        }else{
            res.status(404).json({
                message:'invalid user or password'
            })
        }
    }catch(err){
        res.status(502).json({
            message:err
        })
    }
}

module.exports = userController