const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoSchema = new Schema({
    code:{
        type:String,
        unique:true,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    course:{
        type: Schema.Types.ObjectId,
        Ref:"courses"
    }
},{
    timestamps:false,
    versionKey:false
})
module.exports = mongoose.model('videos',VideoSchema)