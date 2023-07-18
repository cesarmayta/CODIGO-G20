const express = require('express')
const {config} = require('./config')
const cors = require('cors')

const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//configuraciones
app.set('port',config.port)

app.get('/',(req,res)=>{
    res.json({
        "status":true,
        "content":"api rest para clon de udemy"
    })
})


//routes
app.use('/categories',require('./routes/category.route'))
app.use('/course',require('./routes/course.route'))
app.use('/user',require('./routes/user.route'))
app.use('/video',require('./routes/video.route'))

module.exports = app