const {config} = require('../config')
const bcrypt = require('bcryptjs')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const userModel = require('../models/user.model')

passport.serializeUser(function (user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})

passport.use(new GoogleStrategy({
    clientID:config.google.clientId,
    clientSecret:config.google.clientSecret,
    callbackURL : "http://localhost:5000/callback"
},function(accessToken,refreshToken,profile,done){
    console.log(profile)
    const hash = await bcrypt.hash('google',10)
    const userData = {
        email: profile.email
    }

    try{
        
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



}))

passport.initialize()
passport.session()

module.exports = passport