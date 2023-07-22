const express = require('express')
const {config} = require('./config')
const session = require('express-session')

var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const app = express()

app.use(session({
    secret: 'qwerty123',
    resave: false,
    saveUninitialized: true,
    cookie : {secure : true}
}))

passport.serializeUser(function (user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    done(null,user)
})

app.use(express.json())
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.json({
        message: 'servidor passport iniciado'
    })
})

/// auth con google
passport.use(new GoogleStrategy({
    clientID:config.google.clientId,
    clientSecret:config.google.clientSecret,
    callbackURL : "http://localhost:5000/callback"
},function(accessToken,refreshToken,profile,done){
    console.log(profile)
    return done(null,profile)
}))

app.use(passport.initialize())
app.use(passport.session())

app.get('/login',passport.authenticate('google',{ scope: ['https://www.googleapis.com/auth/plus.login'] }))

app.get('/callback',
passport.authenticate('google',{failureRedirect:'/failed'}),
    function(req,res){
        res.send('estas logueado')
    }
)


app.get('/failed',(req,res) => res.send('error en login de google'))

app.listen(config.port,function(){
    console.log(`servidor en http://localhost:${config.port}`)
})