const socket = io('http://localhost:5000')

let output = document.getElementById('output')
let mensaje = document.getElementById('mensaje')
let btn = document.getElementById('enviar')

btn.addEventListener('click',function(){
    socket.emit('mensajeCliente',{
        mensaje:mensaje.value
    })
})