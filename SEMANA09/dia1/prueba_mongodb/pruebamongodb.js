const {MongoClient} = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)

async function main(){
    await client.connect()
    console.log("estas conectado a mongodb...")
    return 0
}

main()