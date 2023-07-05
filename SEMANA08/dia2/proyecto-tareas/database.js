const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_tareas_g20',
    port:'3306'
})

mysqlConnection.connect(function(err){
    if(err){
        console.error(err)
        return
    }else{
        console.log('conectado a bd')
    }
})

module.exports = mysqlConnection