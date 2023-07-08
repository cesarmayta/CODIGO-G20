const {Empresa,EmpresaSchema} = require('./empresa.models')

function setupModels(sequelize){
    Empresa.init(EmpresaSchema,Empresa.config(sequelize))
}

module.exports = setupModels