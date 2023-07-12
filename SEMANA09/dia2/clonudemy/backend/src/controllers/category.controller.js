const categoryController = {}

const CategoryModel = require('../models/category.model')

categoryController.getAll = async (req,res)=>{
    const categories = await CategoryModel.find()
    res.json({
        status:true,
        content:categories
    })
}

module.exports = categoryController