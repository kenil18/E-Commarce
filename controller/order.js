let ORDER = require('../model/order')

exports.orderCreate = async function(req, res, next) {
    try {
        let orderCreate = await ORDER.create(req.body) 
        res.status(201).json({
            status: 'success',
            message: 'Order created successfully',
            orderCreate
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.orderAll = async function(req, res, next) {
    try {
        let orderAll = await ORDER.find()
        res.status(201).json({
            status: 'success',
            message: 'Order All Successfully',
            orderAll
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.orderSingle = async function(req, res, next) {
    try {
        let singleOrder = await ORDER.findById(req.params.id)
        res.status(201).json({
            status: 'success',
            message: 'Order Single Successfully',
            singleOrder
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.orderUpdate = async function(req, res, next) {
    try {
        let orderUpdate = await ORDER.findByIdAndUpdate(req.params.id,req.body,{new : true})
        res.status(201).json({
            status: 'success',
            message: 'Order Update Successfully',
            orderUpdate
        })
    } catch (error) {
        res.status(201).json({
            status: 'fail',
            message: error.message
        })
    }
}
