const {Sequelize} = require('sequelize')
const {config} = require('../config')

const sequelize = new Sequelize(
    config.mysql_db,
    config.mysql_user,
    config.mysql_pwd,{
        host: config.mysql_host,
        dialect:'mysql'
    }
)

sequelize.sync()

module.exports = sequelize