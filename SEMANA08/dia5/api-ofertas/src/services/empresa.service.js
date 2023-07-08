const {models} = require('../lib/sequelize')

class EmpresaService{

    constructor(){

    }

    async getAll(){
        const result = await models.Empresa.findAll()
        return result
    }
}

module.exports = EmpresaService