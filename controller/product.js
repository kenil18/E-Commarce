let PRODUCT = require('../model/product')

exports.productCreate = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let ProductCreate = await PRODUCT.create(req.body) 
        res.status(201).json({
            status: 'success',
            message: 'Product created successfully',
            ProductCreate
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.ProductAll = async function(req, res, next) {
    try {
        let ProductAll = await PRODUCT.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status: 'success',
            message: 'Product All Successfully',
            ProductAll
        })  
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.productSingle = async function(req, res, next) {
    try {
        let SingleProduct = await PRODUCT.findById(req.params.id)
        res.status(201).json({
            status: 'success',
            message: 'Product Single Successfully',
            SingleProduct
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.ProductUpdate = async function(req, res, next) {
    try {
        let ProductUpdate = await PRODUCT.findByIdAndUpdate(req.params.id,req.body,{new : true})
        res.status(201).json({
            status: 'success',
            message: 'Product Update Successfully',
            ProductUpdate
        })
    } catch (error) {
        res.status(201).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.ProductDelete = async function(req, res, next) {
    try {
        let DeleteProduct = await PRODUCT.findByIdAndUpdate(req.params.id)
        res.status(201).json({
            status: 'success',
            message: 'Product Delete Successfully',
            DeleteProduct
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}