require('dotenv').config()

const config = {
    port : process.env.PORT,
    google:{
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET
    }
}

module.exports = {config}