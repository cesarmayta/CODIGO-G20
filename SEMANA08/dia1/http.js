const http = require('http')

http.createServer(function(req,res){
    console.log('servidor activo ...')
    console.log(req.url)
    switch(req.url){
        case '/':
            res.write('<h1><center>Bienvenido a mi sevidor con nodejs</center></h1>')
            break;
        case '/login':
            res.write('<h1>Login de usuarios</h1>')
            break;
        default:
            res.write('<h1>PAGINA NO ENCONTRADA</h1>')
    }
    
    res.end()
}).listen(5000)