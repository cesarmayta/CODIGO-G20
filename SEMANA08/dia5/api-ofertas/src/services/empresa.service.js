const {models} = require('../lib/sequelize')

class EmpresaService{

    constructor(){

    }

    async getAll(){
        const result = await models.Empresa.findAll()
        return result
    }

    async create(data){
        const newData = await models.Empresa.create(data)
        return newData
    }
}

module.exports = EmpresaService