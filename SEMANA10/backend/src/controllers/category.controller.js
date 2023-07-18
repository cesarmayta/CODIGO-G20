const categoryController = {}

const CategoryModel = require('../models/category.model')

categoryController.getAll = async (req,res)=>{
    const categories = await CategoryModel.find()
    res.json({
        status:true,
        content:categories
    })
}

categoryController.create = async (req,res)=>{
    try{
        const newCategory = new CategoryModel(req.body)
        await newCategory.save()
        res.status(201).json({
            status:true,
            content:newCategory
        })
    }catch(err){
        res.status(502).json({
            status:false,
            content:err
        })
    }
}

categoryController.getOne = async (req,res)=>{
    const category = await CategoryModel.findById(req.params.id)
    res.json({
        status:true,
        content:category
    })
}

categoryController.updateOne = async (req,res)=>{
    await CategoryModel.findByIdAndUpdate(req.params.id,req.body)
    const category = await CategoryModel.findById(req.params.id)
    res.json({
        status:true,
        content:category
    })
}

categoryController.deleteOne = async (req,res)=>{
    await CategoryModel.findByIdAndDelete(req.params.id)
    res.sendStatus(202)
}



module.exports = categoryController