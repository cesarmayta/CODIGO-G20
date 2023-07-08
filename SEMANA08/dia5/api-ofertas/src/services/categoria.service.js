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

    async getLast(){
        const sqlLast = `select ${this.table_name}_id as id,
                         ${this.table_name}_descripcion as descripcion
                         from tbl_${this.table_name}
                         order by ${this.table_name}_id desc limit 1`
        const result = await this.db.querySql(sqlLast,[])
        return result
    }

    async create({data}){
        const sqlCreate = `insert into tbl_${this.table_name}
                           (${this.table_name}_descripcion)
                           values (?)`

        await this.db.querySql(sqlCreate,[data.descripcion])
        const result = await this.getLast()
        return result
    }

    async getById(id){
        const sqlGetById = `select ${this.table_name}_id as id,
                            ${this.table_name}_descripcion as descripcion
                            from tbl_${this.table_name} where
                            ${this.table_name}_id = ?`
        
        const result = await this.db.querySql(sqlGetById,[id])
        return result
    }

    async update({data,id}){
        const sqlUpdate = `update tbl_${this.table_name} set
                           ${this.table_name}_descripcion = ?
                           where ${this.table_name}_id = ?`
        await this.db.querySql(sqlUpdate,[data.descripcion,id])
        const result = await this.getById(id)
        return result
    }

    async delete(id){
        const sqlDeleteData = `delete from tbl_${this.table_name}
                               where ${this.table_name}_id = ?`
        await this.db.querySql(sqlDeleteData,[id])
        return true
    }
}

module.exports = CategoriaService