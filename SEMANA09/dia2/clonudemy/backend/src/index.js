const app = require('./app')

async function main(){
    await app.listen(app.get('port'))
    console.log('servidor activo http://localhost:'+app.get('port'))
}

main()