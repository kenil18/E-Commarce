let REVIEW = require('../model/review')

exports.reviewCreate = async function(req, res, next) {
    try {
        req.body.userID = req.userID
        let reviewCreate = await REVIEW.create(req.body) 
        res.status(201).json({
            status: 'success',
            message: 'Review created successfully',
            reviewCreate
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.reviewAll = async function(req, res, next) {
    try {
        let reviewAll = await REVIEW.find({userID : req.userID}).populate("userID")
        res.status(201).json({
            status: 'success',
            message: 'Review All Successfully',
            reviewAll
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.reviewSingle = async function(req, res, next) {
    try {
        let reviewProduct = await REVIEW.findById(req.params.id)
        res.status(201).json({
            status: 'success',
            message: 'Review Single Successfully',
            reviewProduct
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.reviewUpdate = async function(req, res, next) {
    try {
        let reviewUpdate = await REVIEW.findByIdAndUpdate(req.params.id,req.body,{new : true})
        res.status(201).json({
            status: 'success',
            message: 'Review Update Successfully',
            reviewUpdate
        })
    } catch (error) {
        res.status(201).json({
            status: 'fail',
            message: error.message
        })
    }
}
