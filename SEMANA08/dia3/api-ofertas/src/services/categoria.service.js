const MysqlLib = require('../lib/mysql')

class CategoriaService{

    constructor(){
        this.db = new MysqlLib()
        this.table_name = "categoria"
    }

    async getAll(){
        const sqlAll = `select ${this.table_name}_id as id,
                        ${this.table_name}_descripcion as descripcion
                        from tbl_${this.table_name}`
        const result = await this.db.querySql(sqlAll,[])
        return result
    }
}

module.exports = CategoriaService