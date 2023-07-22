const {config} = require('../config')
//const bcrypt = require('bcryptjs')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

//const userModel = require('../models/user.model')

passport.serializeUser(function (user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})

passport.use(new GoogleStrategy({
    clientID:config.google.clientId,
    clientSecret:config.google.clientSecret,
    callbackURL : "http://localhost:5000/google/callback"
},function(accessToken,refreshToken,profile,done){
    console.log(profile)
    return done(null,profile)
    /*const hash = bcrypt.hash(profile.id,10)
    const userData = {
        email: profile.emails[0].value,
        password:hash
    }
    try{
        
        const newUser = new userModel(userData)
        newUser.save()
    }catch(err){
        console.log(err)
        
    }*/
}))

passport.initialize()
passport.session()

module.exports = passport