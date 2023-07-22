const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: { 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    password:{
        type: String,
        require:false,
        minlength:4
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    googleId:{
        type: String,
        require:false,
        minlength:4
    },
},{
    timestamps:false,
    versionKey:false
})

module.exports = mongoose.model('users',UserSchema)