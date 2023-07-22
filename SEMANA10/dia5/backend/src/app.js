const express = require('express')
const {config} = require('./config')
const cors = require('cors')
const session = require('express-session')

const app = express()

app.use(session({
    secret: config.jwt_secret,
    resave: false,
    saveUninitialized: true,
    cookie : {secure : true}
}))

//middlewares
app.use(cors())
app.use(express.json())

//configuraciones
app.set('port',config.port)

app.get('/',(req,res)=>{
    res.json({
        "status":true,
        "content":"api rest courses version 4.0.0"
    })
})


//routes
app.use('/categories',require('./routes/category.route'))
app.use('/course',require('./routes/course.route'))
app.use('/user',require('./routes/user.route'))
app.use('/video',require('./routes/video.route'))
app.use('/google',require('./routes/google.route'))

module.exports = app