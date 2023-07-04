const os = require('os')
const tam = 1024

async function memoria(capacidad){
    capacidad_convertida = capacidad / tam
    return capacidad_convertida.toFixed(0)
}

async function main(){
    console.log("==== MEMORIA CON ASYNC AWAIT ====")
    bytes = os.totalmem()
    kb = await memoria(bytes)
    mb = await memoria(kb)
    gb = await memoria(mb)

    console.table([
        {
            capacidad:'KB',tam:kb
        },
        {
            capacidad:'MB',tam:mb
        },
        {
            capacidad:'GB',tam:gb
        }
    ])

}

main()