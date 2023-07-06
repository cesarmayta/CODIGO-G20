const mysql = require('mysql')
const {config} = require('../config')

class MysqlLib{

    constructor(){
        this.dbSettings = {
            host : config.mysql_host,
            user : config.mysql_user,
            password : config.mysql_pwd,
            database : config.mysql_db
        }
    }

    async getConnection(){
        try{
            const pool = await mysql.createPool(this.dbSettings)
            console.log('estas conectado')
            return pool
        }catch(err){
            console.error(err)
        }
    }

    async querySql(sql){
        const pool = await this.getConnection()
        return new Promise(function(resolve,reject){
            pool.query(sql,function(err,result,fields){
                if(!err) resolve(JSON.parse(JSON.stringify(result)))
                else reject(err)
            })
        })
    }

}

module.exports = MysqlLib