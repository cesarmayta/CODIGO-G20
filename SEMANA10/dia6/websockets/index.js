const express = require('express')
const app = express()

const port = 5000

app.use(express.static('public'))

const server = app.listen(port,()=>console.log('http://localhost:'+port))

/************* web socket ***************/
const SocketIO = require('socket.io')

const io = SocketIO(server)

io.on('connection',(socket)=>{
    console.log('nueva conexión por web socket id : ',socket.id)
    socket.on('mensajeCliente',(data)=>{
        console.log('mensaje del cliente : ',data)
        io.emit('mensajeServidor',data)
        //socket.broadcast.emit('mensajeServidor',data)
    })
})