function hola(nombre,primercallback){
    setTimeout(function(){
        console.log('Hola ' + nombre)
        primercallback(nombre)
    },1000)
}

function hablar(nombre,segundocallback){
    setTimeout(function(){
        console.log('como estas ' + nombre)
        segundocallback(nombre)
    },1000)
}

function adios(nombre){
    console.log('adios ' + nombre)
}

//callback hell
hola('César',function(nombre){
    hablar(nombre,function(nombre){
        adios(nombre)
    })
})