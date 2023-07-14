const videoController = {}

const videoModel = require('../models/video.model')

videoController.create = async (req,res)=>{
    try{
        const newVideo = new videoModel(req.body)
        await newVideo.save()
        res.json(newVideo)
    }catch(err){
        res.status(502).json({
            message:err
        })
    }
}

videoController.getAll = async (req,res)=>{
    const videos = await videoModel.find()
    res.json(videos)
}

videoController.getByCourseId = async (req,res)=>{
    const videos = await videoModel.find({course:req.params.id})
    res.json(videos)
}

videoController.updateOne = async (req,res)=>{
    await videoModel.findByIdAndUpdate(req.params.id,req.body)
    const videoUpdated = await videoModel.findById(req.params.id)
    res.json(videoUpdated)
}

videoController.deleteOne = async (req,res)=>{
    await videoModel.findByIdAndDelete(req.params.id)
    res.sendStatus(202)
}

module.exports = videoController