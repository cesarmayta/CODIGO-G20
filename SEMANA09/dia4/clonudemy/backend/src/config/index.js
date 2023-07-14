require('dotenv').config()

const config = {
    port: process.env.PORT || '5000',
    mongoUri : process.env.MONGOURI || 'mongodb://127.0.0.1:27017/db_clon_udemy',
    jwt_secret: process.env.JWT_SECRET || 'qwerty123'
}

module.exports = {config}