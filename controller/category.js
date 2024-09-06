let CATEGORY = require('../model/category') 

exports.categoryCreate = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let category = await CATEGORY.create(req.body)
        res.status(201).json({
            status : 'success',
            message : 'Category created successfully',
            category
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}
exports.categoryAll = async function(req, res, next) {
    try {
        let categoryAll = await CATEGORY.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status : 'success',
            message : 'Category all successfully',
            categoryAll
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}

exports.categorySingle = async function(req, res, next) {
    try {
        let SingleCategory = await CATEGORY.findById(req.params.id)
        res.status(201).json({
            status : 'success',
            message : 'Category single successfully',
            SingleCategory
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}

exports.CategoryUpdate = async function(req, res, next) {
    try {
        let UpdateCategory = await CATEGORY.findByIdAndUpdate(req.params.id, req.body,{new : true})
        res.status(201).json({
            status : 'success',
            message : 'Category update successfully',
            UpdateCategory
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}

exports.CategoryDelete = async function(req, res, next) {
    try {
        let CategoryDelete = await CATEGORY.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status : 'success',
            message : 'Category delete successfully',
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
        })
    }
}