const {Model,DataTypes,Sequelize} = require('sequelize')

const TABLE_NAME = 'tbl_empresa'

const EmpresaSchema = {
    id:{
        field:'empresa_id',
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    nombre:{
        allowNull:false,
        type:DataTypes.STRING,
        field:'empresa_nombre'
    },
    descripcion:{
        allowNull:true,
        type:DataTypes.STRING,
        field:'empresa_descripcion'
    },
    logo:{
        allowNull:true,
        type:DataTypes.STRING,
        field:'empresa_logo'
    },
    beneficios:{
        allowNull:true,
        type:DataTypes.STRING,
        field:'empresa_beneficios'
    }
}

class Empresa extends Model{
    static associate(){

    }

    static config(sequelize){
        return{
            sequelize,
            tableName:TABLE_NAME,
            modelName:'Empresa',
            timestamps:false
        }
    }
}


module.exports = {TABLE_NAME,EmpresaSchema,Empresa}