const express = require('express')
const {config} = require('../../config')
const cors = require('cors')

require('../../libs/mongoose.lib')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        message:'users microservice active'
    })
})

app.use('/user',require('../../routes/user.route'))

app.listen(config.ms_users.port,function(){
    console.log(`ms users : http://localhost:${config.ms_users.port}`)
})
