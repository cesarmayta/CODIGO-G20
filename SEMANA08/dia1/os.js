const os = require('os')

const procesador = os.arch()
const sistema = os.platform()
const cpu = os.cpus().length
const memoria = os.totalmem()

console.log('procesador :' + procesador)
console.log('sistema operativo :' + sistema)
console.log('CPU :' + cpu)
console.log('Memoria RAM : ' + memoria)
memoria_kb = memoria / 1024
console.log('Memoria RAM en kb :' + memoria_kb)
memoria_mb = memoria_kb / 1024
console.log('Memoria RAM en mb :' + memoria_mb)
//crear una promesa que permita calcular la memoria en kb,mb,gb
function calcularMemoria(capacidad,tipo){
    return new Promise((res,rej)=>{
        let memoria_convertida = capacidad / 1024
        console.log('MEMORIA EN ' + tipo + ' :' + memoria_convertida)
        res(memoria_convertida)
    })
}

console.log('========= MEMORIA CON PROMESAS ============')
calcularMemoria(os.totalmem(),'KB')
    .then((kb)=>calcularMemoria(kb,'MB'))
    .then((mb)=>calcularMemoria(mb,'GB'))