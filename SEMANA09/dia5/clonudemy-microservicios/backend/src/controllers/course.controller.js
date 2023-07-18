const courseController = {}
const courseModel = require('../models/course.model')

courseController.create = async (req,res)=>{
    try{
        const newCourse = new courseModel(req.body)
        await newCourse.save()
        res.json({
            status:true,
            content:newCourse
        })
    }catch(err){
        res.status(502).json({
            status:false,
            content:err
        })
    }
}

courseController.getAll = async (req,res)=>{
    const courses = await courseModel.find()
    res.json(courses)
}

courseController.getOne = async (req,res)=>{
    const course = await courseModel.findById(req.params.id)
    res.json(course)
}

courseController.updateOne = async (req,res)=>{
    await courseModel.findByIdAndUpdate(req.params.id,req.body)
    const course = await courseModel.findById(req.params.id)
    res.json(course)
}

module.exports = courseController