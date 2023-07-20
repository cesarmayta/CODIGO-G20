const express = require('express')
const {config} = require('../../config')
const cors = require('cors')

require('../../libs/mongoose.lib')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        message:'courses microservice active'
    })
})

app.use('/categories',require('../../routes/category.route'))
app.use('/course',require('../../routes/course.route'))
app.use('/video',require('../../routes/video.route'))

app.listen(config.ms_courses.port,function(){
    console.log(`ms courses : http://localhost:${config.ms_courses.port}`)
})
