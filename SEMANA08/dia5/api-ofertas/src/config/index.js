require('dotenv').config()

const config = {
    port:process.env.PORT || 5000,
    mysql_user: process.env.MYSQL_USER || 'root',
    mysql_pwd: process.env.MYSQL_PWD || '',
    mysql_host: process.env.MYSQL_HOST || 'localhost',
    mysql_db: process.env.MYSQL_DB || 'db_ofertas_g20',
    jwt_secret:process.env.JWT_SECRET || 'qwerty123'
}

module.exports = {config}