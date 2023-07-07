const MysqlLib = require('../lib/mysql')
const bcrypt = require('bcryptjs')

class UsuarioService{

    constructor(){
        this.db = new MysqlLib()
    }

    async getLast(){
        const sqlLast = `select usuario_id as id,
                         usuario_nombre as usuario
                         from tbl_usuario
                         order by usuario_id desc limit 1`
        const result = await this.db.querySql(sqlLast,[])
        return result
    }
    async create({usuario}){
        const passwordEncriptado = await bcrypt.hash(usuario.password,10)

        const sqlCreate = `insert into tbl_usuario(usuario_nombre,usuario_password)
                            values(?,?)
                            `
        await this.db.querySql(sqlCreate,[usuario.usuario,passwordEncriptado])
        const result = await this.getLast()
        return result
    }

}

module.exports = UsuarioService